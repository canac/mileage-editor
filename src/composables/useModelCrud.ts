import {
  UseMutationOptions, UseMutationReturn, UseQueryReturn, useResult,
} from '@vue/apollo-composable';
import { DocumentNode } from 'graphql';
import { Ref } from 'vue';
import {
  MakeOptional, Scalars,
} from '../generated/graphql';

type MongoId = Scalars['MongoID'];
type WithoutId<Model> = Omit<Model, '_id'>;
type ModelTemplate = {
  __typename?: string;
  _id: MongoId;
  [key: string]: unknown;
}
type MutationResult<Model = ModelTemplate> = {
  __typename?: 'Mutation';
  result?: {
    __typename?: string;
    record?: Model;
    recordId?: MongoId;
  } | null;
}
type ReadResult<Model = ModelTemplate> = {
  __typename?: 'Query';
  records: Model[];
}
type CreateVariables<Model> = {
  record: WithoutId<Model>;
}
type ModifiableFields<Model> = Omit<MakeOptional<Model, keyof Model>, '__typename' | '_id'>
type UpdateVariables<Model> = {
  id: MongoId;
  record: ModifiableFields<Model>;
}
type DestroyVariables = {
  id: MongoId;
}

export function useRead<Model extends ModelTemplate>(
  useReadQuery: () => UseQueryReturn<ReadResult<Model>, Record<string, never>>,
): {
  models: Ref<Readonly<Model[]>>,
} {
  const { result } = useReadQuery();

  const models = useResult(result, []);
  return {
    models,
  };
}

export function useCreate<
  Model extends ModelTemplate,
  Result extends MutationResult<Model>,
  Query extends ReadResult,
>(
  useCreateMutation: (options: UseMutationOptions<Result, CreateVariables<Model>>) =>
    UseMutationReturn<Result, CreateVariables<Model>>,
  readQuery: DocumentNode,
): {
  create(newModel: WithoutId<Model>): Promise<Model>,
} {
  const { mutate } = useCreateMutation({});

  async function create(newModel: WithoutId<Model>): Promise<Model> {
    const { data } = await mutate({
      record: newModel,
    }, {
      update(cache, result) {
        const createdModel = result.data?.result?.record;
        if (!createdModel) {
          return;
        }

        // Add the newly created model to the cache
        const cachedQuery = cache.readQuery<Query>({ query: readQuery });
        if (!cachedQuery) {
          return;
        }

        cache.writeQuery({
          query: readQuery,
          data: {
            ...cachedQuery,
            records: [...cachedQuery.records, createdModel],
          },
        });
      },
    });

    const record = data?.result?.record;
    if (record) {
      return record;
    }

    throw new Error('Model was not created');
  }

  return { create };
}

export function useUpdate<
  Model extends ModelTemplate,
  Result extends MutationResult<Model>,
>(
  useUpdateMutation: (options: UseMutationOptions<Result, UpdateVariables<Model>>) =>
    UseMutationReturn<Result, UpdateVariables<Model>>,
): {
  update(id: MongoId, modifiedFields: ModifiableFields<Model>): Promise<Model>,
} {
  const { mutate } = useUpdateMutation({});

  async function update(id: MongoId, modifiedFields: ModifiableFields<Model>): Promise<Model> {
    const { data } = await mutate({
      id,
      record: modifiedFields,
    });

    const record = data?.result?.record;
    if (record) {
      return record;
    }

    throw new Error('Model was not updated');
  }

  return { update };
}

export function useDestroy<
  Model extends ModelTemplate,
  Result extends MutationResult<Model>,
  Query extends ReadResult,
>(
  useDestroyMutation: (options: UseMutationOptions<Result, DestroyVariables>) =>
    UseMutationReturn<Result, DestroyVariables>,
  readQuery: DocumentNode,
): {
  destroy(id: MongoId): Promise<MongoId>,
} {
  const { mutate } = useDestroyMutation({});

  async function destroy(id: MongoId): Promise<MongoId> {
    const { data } = await mutate({
      id,
    }, {
      update(cache, result) {
        const deletedId = result.data?.result?.recordId;
        if (!deletedId) {
          return;
        }

        // Remove the deleted favorite place from the cache
        const cachedQuery = cache.readQuery<Query>({ query: readQuery });
        if (!cachedQuery) {
          return;
        }

        cache.writeQuery({
          query: readQuery,
          data: {
            ...cachedQuery,
            records: cachedQuery.records.filter(({ _id }) => _id !== deletedId),
          },
        });
      },
    });

    const recordId = data?.result?.recordId;
    if (recordId) {
      return recordId;
    }

    throw new Error('Model was not destroyed');
  }

  return { destroy };
}
