import { Journey } from '../generated/graphql';
import { useReadJourneyTemplate } from './useJourneyTemplateCrud';

// Attempt to expand a journey template to a full journey
export default function useExpandAddress(): {
  expandTemplate: (journey: Journey) => Pick<Journey, 'description' | 'to' | 'from' | 'miles'> | null;
  } {
  const { models: journeyTemplates } = useReadJourneyTemplate();

  return {
    // Determine whether any templates match the provided journey
    // If there is a match, return the template fields that should be changed on the journey
    // If there is no match, return null
    expandTemplate(journey: Journey): Pick<Journey, 'description' | 'to' | 'from' | 'miles'> | null {
      for (const place of journeyTemplates.value ?? []) {
        // Attempt to match the journey description to the journey template's name
        if (journey.description.toLowerCase() === place.name.toLowerCase()) {
          return {
            description: place.description,
            to: place.to,
            from: place.from,
            miles: place.miles,
          };
        }
      }

      // No journey fields are changed
      return null;
    },
  };
}
