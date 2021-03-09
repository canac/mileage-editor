/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CreateFavoritePlaceMutation, DeleteFavoritePlaceMutation, FavoritePlace,
  ReadFavoritePlacesDocument, ReadFavoritePlacesQuery, UpdateFavoritePlaceMutation,
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
  return useCreate<FavoritePlace, CreateFavoritePlaceMutation, ReadFavoritePlacesQuery>(
    useCreateFavoritePlaceMutation, ReadFavoritePlacesDocument,
  );
}

export function useUpdateFavoritePlace() {
  return useUpdate<FavoritePlace, UpdateFavoritePlaceMutation>(
    useUpdateFavoritePlaceMutation,
  );
}

export function useDestroyFavoritePlace() {
  return useDestroy<FavoritePlace, DeleteFavoritePlaceMutation, ReadFavoritePlacesQuery>(
    useDeleteFavoritePlaceMutation, ReadFavoritePlacesDocument,
  );
}
