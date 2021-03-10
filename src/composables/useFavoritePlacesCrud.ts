/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  FavoritePlace, ReadFavoritePlacesDocument, ReadFavoritePlacesQuery,
  useCreateFavoritePlaceMutation, useDeleteFavoritePlaceMutation,
  useReadFavoritePlacesQuery, useUpdateFavoritePlaceMutation,
} from '../generated/graphql';
import {
  useCreate, useDestroy, useRead, useUpdate,
} from './useModelCrud';

export function useReadFavoritePlace() {
  return useRead<FavoritePlace>(useReadFavoritePlacesQuery);
}

export function useCreateFavoritePlace() {
  return useCreate<FavoritePlace, ReadFavoritePlacesQuery>(
    useCreateFavoritePlaceMutation, 'FavoritePlace', ReadFavoritePlacesDocument,
  );
}

export function useUpdateFavoritePlace() {
  return useUpdate<FavoritePlace>(
    useUpdateFavoritePlaceMutation, 'FavoritePlace',
  );
}

export function useDestroyFavoritePlace() {
  return useDestroy<FavoritePlace, ReadFavoritePlacesQuery>(
    useDeleteFavoritePlaceMutation, 'FavoritePlace', ReadFavoritePlacesDocument,
  );
}
