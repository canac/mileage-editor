import {
  UseMutationOptions, UseMutationReturn, UseQueryReturn, useResult,
} from '@vue/apollo-composable';
import { DocumentNode } from 'graphql';
import { v4 } from 'uuid';
import { Ref } from 'vue';
import {
  MakeOptional, Scalars,
} from '../generated/graphql';

type MongoId = Scalars['MongoID'];
type OnlyFields<Model> = Omit<Model, '__typename' | '_id'>;
type ModelTemplate = {
  __typename: string;
  _id: MongoId;
  [key: string]: unknown;
}
type CreateMutationResult<Model extends ModelTemplate> = {
  __typename: 'Mutation';
  result?: {
    __typename: `CreateOne${Model['__typename']}Payload`;
    record?: Model | null;
  } | null;
}
type UpdateMutationResult<Model extends ModelTemplate> = {
  __typename: 'Mutation';
  result?: {
    __typename: `UpdateById${Model['__typename']}Payload`;
    record?: Model | null;
  } | null;
}
type DestroyMutationResult<Model extends ModelTemplate> = {
  __typename: 'Mutation';
  result?: {
    __typename: `RemoveById${Model['__typename']}Payload`;
    recordId?: MongoId;
  } | null;
}
type QueryResult<Model = ModelTemplate> = {
  __typename: 'Query';
  records: Model[];
}
type CreateVariables<Model> = {
  record: OnlyFields<Model>;
}
type ModifiableFields<Model> = OnlyFields<MakeOptional<Model, keyof Model>>;
type UpdateVariables<Model> = {
  id: MongoId;
  record: ModifiableFields<Model>;
}
type DestroyVariables = {
  id: MongoId;
}

export function useRead<Model extends ModelTemplate>(
  useReadQuery: () => UseQueryReturn<QueryResult<Model>, Record<string, never>>,
): {
  models: Ref<Readonly<Model[] | undefined>>,
} {
  const { result } = useReadQuery();

  const models = useResult(result);
  return {
    models,
  };
}

export function useCreate<
  Model extends ModelTemplate,
  Query extends QueryResult,
>(
  useCreateMutation: (options: UseMutationOptions<CreateMutationResult<Model>, CreateVariables<Model>>) =>
    UseMutationReturn<CreateMutationResult<Model>, CreateVariables<Model>>,
  modelName: Model['__typename'],
  readQuery: DocumentNode,
): {
  create(newModel: OnlyFields<Model>): Promise<Model>,
} {
  const { mutate } = useCreateMutation({});

  async function create(newModel: OnlyFields<Model>): Promise<Model> {
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
      optimisticResponse: {
        __typename: 'Mutation',
        result: {
          __typename: `CreateOne${modelName}Payload` as const,
          record: {
            __typename: modelName,
            _id: v4(),
            ...newModel,
          } as Model,
        },
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
>(
  useUpdateMutation: (options: UseMutationOptions<UpdateMutationResult<Model>, UpdateVariables<Model>>) =>
    UseMutationReturn<UpdateMutationResult<Model>, UpdateVariables<Model>>,
  modelName: Model['__typename'],
): {
  update(id: MongoId, modifiedFields: ModifiableFields<Model>): Promise<Model>,
} {
  const { mutate } = useUpdateMutation({});

  async function update(id: MongoId, modifiedFields: ModifiableFields<Model>): Promise<Model> {
    const { data } = await mutate({
      id,
      record: modifiedFields,
    }, {
      optimisticResponse: {
        __typename: 'Mutation',
        result: {
          __typename: `UpdateById${modelName}Payload` as const,
          record: {
            __typename: modelName,
            _id: id,
            ...modifiedFields,
          } as Model,
        },
      },
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
  Query extends QueryResult,
>(
  useDestroyMutation: (options: UseMutationOptions<DestroyMutationResult<Model>, DestroyVariables>) =>
    UseMutationReturn<DestroyMutationResult<Model>, DestroyVariables>,
  modelName: Model['__typename'],
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
      optimisticResponse: {
        __typename: 'Mutation',
        result: {
          __typename: `RemoveById${modelName}Payload` as const,
          recordId: id,
        },
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
