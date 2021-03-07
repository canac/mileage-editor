import { useResult } from '@vue/apollo-composable';
import { Ref, computed } from 'vue';
import {
  FavoritePlace,
  ReadFavoritePlacesDocument,
  ReadFavoritePlacesQuery,
  useCreateFavoritePlaceMutation, useDeleteFavoritePlaceMutation,
  useReadFavoritePlacesQuery, useUpdateFavoritePlaceMutation,
} from '../generated/graphql';

export function useRead(): {
  favoritePlaces: Ref<Readonly<FavoritePlace[]>>
  } {
  const { result } = useReadFavoritePlacesQuery();

  const favoritePlaces = useResult<ReadFavoritePlacesQuery, 'favoritePlaceMany'>(result);
  return {
    favoritePlaces: computed(() => favoritePlaces.value ?? []),
  };
}

export function useCreate(): {
  create(newPlace: Omit<FavoritePlace, '_id'>): Promise<FavoritePlace>,
  } {
  const { mutate } = useCreateFavoritePlaceMutation({});

  async function create(newPlace: FavoritePlace): Promise<FavoritePlace> {
    const { data } = await mutate({
      favoritePlaceCreateOneRecord: newPlace,
    }, {
      update(cache, result) {
        const createdPlace = result.data?.favoritePlaceCreateOne?.record;
        if (!createdPlace) {
          return;
        }

        // Add the newly created favorite place to the cache
        const cachedQuery = cache.readQuery<ReadFavoritePlacesQuery>({ query: ReadFavoritePlacesDocument });
        if (!cachedQuery) {
          return;
        }

        cache.writeQuery({
          query: ReadFavoritePlacesDocument,
          data: {
            ...cachedQuery,
            favoritePlaceMany: [...cachedQuery.favoritePlaceMany, createdPlace],
          },
        });
      },
    });

    if (data?.favoritePlaceCreateOne?.record) {
      return data?.favoritePlaceCreateOne?.record;
    }

    throw new Error('Favorite place was not created');
  }

  return { create };
}

export function useUpdate(): {
  update(id: FavoritePlace['_id'], modifiedFields: Partial<FavoritePlace>): Promise<FavoritePlace>,
  } {
  const { mutate } = useUpdateFavoritePlaceMutation({});

  async function update(id: FavoritePlace['_id'], modifiedFields: Partial<FavoritePlace>): Promise<FavoritePlace> {
    const { data } = await mutate({
      favoritePlaceUpdateByIdId: id,
      favoritePlaceUpdateByIdRecord: modifiedFields,
    });

    if (data?.favoritePlaceUpdateById?.record) {
      return data?.favoritePlaceUpdateById?.record;
    }

    throw new Error('Favorite place was not updated');
  }

  return { update };
}

export function useDestroy(): {
  destroy(id: FavoritePlace['_id']): Promise<FavoritePlace['_id']>,
  } {
  const { mutate } = useDeleteFavoritePlaceMutation({});

  async function destroy(id: FavoritePlace['_id']): Promise<FavoritePlace['_id']> {
    const { data } = await mutate({
      favoritePlaceRemoveByIdId: id,
    }, {
      update(cache, result) {
        const deletedPlaceId = result.data?.favoritePlaceRemoveById?.recordId;
        if (!deletedPlaceId) {
          return;
        }

        // Remove the deleted favorite place from the cache
        const cachedQuery = cache.readQuery<ReadFavoritePlacesQuery>({ query: ReadFavoritePlacesDocument });
        if (!cachedQuery) {
          return;
        }

        cache.writeQuery({
          query: ReadFavoritePlacesDocument,
          data: {
            ...cachedQuery,
            favoritePlaceMany: cachedQuery.favoritePlaceMany.filter(({ _id }) => _id !== deletedPlaceId),
          },
        });
      },
    });

    if (data?.favoritePlaceRemoveById?.recordId) {
      return data?.favoritePlaceRemoveById.recordId;
    }

    throw new Error('Favorite place was not destroyed');
  }

  return { destroy };
}
