import { useResult } from '@vue/apollo-composable';
import { Ref, computed } from 'vue';
import {
  FavoritePlace,
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
    });

    if (data?.favoritePlaceCreateOne?.record) {
      return data?.favoritePlaceCreateOne?.record;
    }

    throw new Error('Favorite place was not created');
  }

  return { create };
}

export function useUpdate(): {
  update(id: string, modifiedFields: Partial<FavoritePlace>): Promise<FavoritePlace>,
  } {
  const { mutate } = useUpdateFavoritePlaceMutation({});

  async function update(id: string, modifiedFields: Partial<FavoritePlace>): Promise<FavoritePlace> {
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
  destroy(id: string): Promise<string>,
  } {
  const { mutate } = useDeleteFavoritePlaceMutation({});

  async function destroy(id: string): Promise<string> {
    const { data } = await mutate({
      favoritePlaceRemoveByIdId: id,
    });

    if (data?.favoritePlaceRemoveById?.recordId) {
      return data?.favoritePlaceRemoveById.recordId;
    }

    throw new Error('Favorite place was not destroyed');
  }

  return { destroy };
}
