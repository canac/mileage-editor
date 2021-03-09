/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  CreateJourneyMutation, DeleteJourneyMutation, Journey,
  ReadJourneysDocument, ReadJourneysQuery, UpdateJourneyMutation,
  useCreateJourneyMutation, useDeleteJourneyMutation,
  useReadJourneysQuery, useUpdateJourneyMutation,
} from '../generated/graphql';
import {
  useCreate, useDestroy, useRead, useUpdate,
} from './useModelCrud';

export function useReadJourney() {
  return useRead<Journey>(useReadJourneysQuery);
}

export function useCreateJourney() {
  return useCreate<Journey, CreateJourneyMutation, ReadJourneysQuery>(
    useCreateJourneyMutation, ReadJourneysDocument,
  );
}

export function useUpdateJourney() {
  return useUpdate<Journey, UpdateJourneyMutation>(
    useUpdateJourneyMutation,
  );
}

export function useDestroyJourney() {
  return useDestroy<Journey, DeleteJourneyMutation, ReadJourneysQuery>(
    useDeleteJourneyMutation, ReadJourneysDocument,
  );
}
