<template>
  <div
    class="mileage-table"
  >
    <data-grid
      v-slot="{ row: journey }"
      :rows="journeys"
      :create-new-row="createJourney"
    >
      <input
        v-model="journey.date"
        class="date"
        placeholder="Date"
        type="date"
        @change="updateJourney(journey, 'date')"
      >
      <input
        v-model="journey.description"
        class="description"
        placeholder="Description"
        @change="onDescriptionChange(journey)"
      >
      <AddressAutocomplete
        v-model="journey.from"
        class="from"
        placeholder="From"
        @change="updateJourney(journey, 'from')"
      />
      <AddressAutocomplete
        v-model="journey.to"
        class="to"
        placeholder="To"
        @change="updateJourney(journey, 'to')"
      />
      <input
        v-model.number="journey.miles"
        class="miles"
        placeholder="Miles"
        type="number"
        @change="updateJourney(journey, 'miles')"
      >
      <div class="actions">
        <i
          class="fas fa-fw fa-copy"
          title="Duplicate journey"
          @click="duplicateJourney(journey)"
        />
        <i
          class="fas fa-fw fa-route"
          title="Continue journey"
          @click="continueJourney(journey)"
        />
        <i
          class="fas fa-fw fa-home"
          title="Return home"
          @click="returnHome(journey)"
        />
        <i
          class="fas fa-fw fa-save"
          title="Convert journey to template"
          @click="convertJourneyToTemplate(journey)"
        />
        <i
          class="fas fa-fw fa-trash"
          title="Delete journey"
          @click="deleteJourney(journey)"
        />
      </div>
    </data-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import useExpandAddress from '../composables/useExpandAddress';
import useExpandTemplate from '../composables/useExpandTemplate';
import { useCreateJourneyTemplate } from '../composables/useJourneyTemplateCrud';
import {
  useCreateJourney, useDestroyJourney, useReadJourney, useUpdateJourney,
} from '../composables/useMileageLogCrud';
import { Journey, JourneyTemplate } from '../generated/graphql';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  emits: ['loaded'],

  setup(_, { emit }) {
    const { models: journeys, loading } = useReadJourney();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateJourney();
    const { create: createTemplate } = useCreateJourneyTemplate();
    const { update } = useUpdateJourney();
    const { destroy } = useDestroyJourney();
    const { expandAddress } = useExpandAddress();
    const { expandTemplate } = useExpandTemplate();
    /* eslint-enable @typescript-eslint/unbound-method */

    // Extract the description and the modifier from a description
    // The expected format is "description - modifier"
    function parseDescription(description: string): { description: string; modifier: string } {
      const matches = /^(?<description>.+?)\s*-\s*(?<modifier>\S[^-]+)$/.exec(description);
      if (!matches) {
        // If the description doesn't match that pattern, use the entire description as the modifier
        return {
          description,
          modifier: '',
        };
      }

      return {
        description: (matches.groups?.description ?? '').trim(),
        modifier: matches.groups?.modifier ?? '',
      };
    }

    watch(loading, () => {
      if (loading.value === false) {
        emit('loaded');
      }
    });

    // Expand the description via journey templates
    // Return a boolean indicating whether the journey was expanded
    function expandDescription(journey: Journey): boolean {
      const changedFields = expandTemplate(journey);
      if (!changedFields) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      update(journey._id, changedFields);
      return true;
    }

    // Create a new journey in the database
    function createJourney(): Promise<Journey> {
      return create({
        date: new Date().toISOString().slice(0, 10), // today
        description: '',
        from: expandAddress('home'),
        to: '',
        miles: 0,
      });
    }

    // Save the field that changed to the database
    function updateJourney(journey: Journey, field: keyof Journey): Promise<Journey> {
      return update(journey._id, {
        [field]: journey[field],
      });
    }

    // Delete the journey from the database
    function deleteJourney(journey: Journey): Promise<string> {
      return destroy(journey._id);
    }

    // Make a copy of the specified journey
    function duplicateJourney(journey: Journey): Promise<Journey> {
      const {
        date, description, from, to, miles,
      } = journey;
      return create({
        date, description, from, to, miles,
      });
    }

    // Start a new leg of the journey that beings where the specified journey ends
    function continueJourney(journey: Journey): Promise<Journey> {
      const { date, to } = journey;
      return create({
        date,
        description: ' - to',
        from: to,
        to: '',
        miles: 0,
      });
    }

    // Start a new leg of the journey that begins where the specified journey ends and goes home
    function returnHome(journey: Journey): Promise<Journey> {
      const { date, description, to } = journey;
      const { description: rootDescription } = parseDescription(description);
      return create({
        date,
        description: `${rootDescription} - from`,
        from: to,
        to: expandAddress('home'),
        miles: 0,
      });
    }

    // Convert the journey into a journey template
    function convertJourneyToTemplate(journey: Journey): Promise<JourneyTemplate> {
      const {
        description, from, to, miles,
      } = journey;
      return createTemplate({
        name: '',
        description,
        from,
        to,
        miles,
      });
    }

    // Handle changes to the journey description
    function onDescriptionChange(journey: Journey) {
      // If the journey matched a template, don't save the original journey description because that will overwrite the
      // one from the template
      if (!expandDescription(journey)) {
        // Determine whether the destination has a "- xxx" modifier at the end of it
        const { description, modifier } = parseDescription(journey.description);

        const changedFields: Partial<Journey> = {
          // Add a modifier if it doesn't have one
          description: `${description} - ${modifier || '2 way'}`,
        };

        if (modifier === 'from') {
          changedFields.to = expandAddress('home');
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        update(journey._id, changedFields);
      }
    }

    return {
      // Clone the readonly journeys array
      journeys: computed(() => journeys.value && journeys.value.map((journey) => ({ ...journey }))),

      expandDescription,
      onDescriptionChange,

      createJourney,
      updateJourney,
      deleteJourney,

      duplicateJourney,
      continueJourney,
      returnHome,
      convertJourneyToTemplate,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../mixins/datagrid.scss';
@import '../mixins/multiline-datagrid.scss';

.data-grid :deep(.row) {
  @include datagrid;

  .date {
    grid-area: date;
  }
  .description {
    grid-area: description;
  }
  .from {
    grid-area: from;
  }
  .to {
    grid-area: to;
  }
  .miles {
    grid-area: miles;
  }
  .actions {
    grid-area: actions;
  }

  grid-template-areas:
    "date description from to miles actions";
  grid-template-columns: 9em 12em 1fr 1fr 4em auto;

  @media (max-width: 1024px) {
    @include multiline-datagrid;

    grid-template-areas:
      "date description"
      "from to"
      "miles actions";
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 512px) {
    @include multiline-datagrid;

    grid-template-areas:
      "date"
      "description"
      "from"
      "to"
      "miles"
      "actions";
    grid-template-columns: 1fr;
  }

  .fas {
    color: #444444;
  }
}
</style>
