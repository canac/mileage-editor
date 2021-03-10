/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Journey, ReadJourneysDocument, ReadJourneysQuery,
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
  return useCreate<Journey, ReadJourneysQuery>(
    useCreateJourneyMutation, 'Journey', ReadJourneysDocument,
  );
}

export function useUpdateJourney() {
  return useUpdate<Journey>(
    useUpdateJourneyMutation, 'Journey',
  );
}

export function useDestroyJourney() {
  return useDestroy<Journey, ReadJourneysQuery>(
    useDeleteJourneyMutation, 'Journey', ReadJourneysDocument,
  );
}
