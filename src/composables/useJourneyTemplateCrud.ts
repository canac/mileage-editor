/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  JourneyTemplate,
  ReadJourneyTemplatesDocument,
  ReadJourneyTemplatesQuery,
  useCreateJourneyTemplateMutation,
  useDeleteJourneyTemplateMutation,
  useReadJourneyTemplatesQuery,
  useUpdateJourneyTemplateMutation,
} from '../generated/graphql';
import { useCreate, useDestroy, useRead, useUpdate } from './useModelCrud';

export function useReadJourneyTemplate() {
  return useRead<JourneyTemplate>(useReadJourneyTemplatesQuery);
}

export function useCreateJourneyTemplate() {
  return useCreate<JourneyTemplate, ReadJourneyTemplatesQuery>(
    useCreateJourneyTemplateMutation,
    'JourneyTemplate',
    ReadJourneyTemplatesDocument,
  );
}

export function useUpdateJourneyTemplate() {
  return useUpdate<JourneyTemplate>(
    useUpdateJourneyTemplateMutation,
    'JourneyTemplate',
  );
}

export function useDestroyJourneyTemplate() {
  return useDestroy<JourneyTemplate, ReadJourneyTemplatesQuery>(
    useDeleteJourneyTemplateMutation,
    'JourneyTemplate',
    ReadJourneyTemplatesDocument,
  );
}
