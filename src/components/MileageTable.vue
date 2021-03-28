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
        placeholder="Date"
        type="date"
        @change="updateJourney(journey, 'date')"
      >
      <input
        v-model="journey.description"
        placeholder="Description"
        @change="onDescriptionChange(journey)"
      >
      <AddressAutocomplete
        v-model="journey.from"
        placeholder="From"
        @input="journey.from = expandAddress(journey.from)"
        @change="updateJourney(journey, 'from')"
      />
      <AddressAutocomplete
        v-model="journey.to"
        placeholder="To"
        @input="journey.to = expandAddress(journey.to)"
        @change="updateJourney(journey, 'to')"
      />
      <input
        v-model.number="journey.miles"
        placeholder="Miles"
        type="number"
        @change="updateJourney(journey, 'miles')"
      >
      <div class="actions">
        <i
          class="fas fa-fw fa-paste"
          title="Duplicate journey"
          @click="duplicateJourney(journey)"
        />
        <i
          class="fas fa-fw fa-route"
          title="Continue journey"
          @click="continueJourney(journey)"
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
import { computed, defineComponent } from 'vue';
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

  setup() {
    const { models: journeys } = useReadJourney();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateJourney();
    const { create: createTemplate } = useCreateJourneyTemplate();
    const { update } = useUpdateJourney();
    const { destroy } = useDestroyJourney();
    const { expandAddress } = useExpandAddress();
    const { expandTemplate } = useExpandTemplate();
    /* eslint-enable @typescript-eslint/unbound-method */

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
        from: '',
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
        description: '',
        from: to,
        to: '',
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
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        updateJourney(journey, 'description');
      }
    }

    return {
      // Clone the readonly journeys array
      journeys: computed(() => journeys.value && journeys.value.map((journey) => ({ ...journey }))),

      expandAddress,
      expandDescription,
      onDescriptionChange,

      createJourney,
      updateJourney,
      deleteJourney,

      duplicateJourney,
      continueJourney,
      convertJourneyToTemplate,
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid :deep(.row) {
  font-size: 1.25em;
  grid-template-columns: 8em 12em 1fr 1fr 4em auto;

  input {
    font-size: inherit;
  }

  .actions .fas {
    padding: 3px 5px;
    color: #444444;
    cursor: pointer;

    &.fa-trash {
      color: hsl(0, 50%, 50%);
    }
  }
}
</style>
