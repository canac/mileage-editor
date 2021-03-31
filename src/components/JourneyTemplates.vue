<template>
  <div
    class="journey-templates"
  >
    <data-grid
      v-slot="{ row: journey }"
      :rows="journeys"
      :create-new-row="createJourneyTemplate"
    >
      <input
        v-model="journey.name"
        placeholder="Name"
        @change="updateJourneyTemplate(journey, 'name')"
      >
      <input
        v-model="journey.description"
        placeholder="Description"
        @change="updateJourneyTemplate(journey, 'description')"
      >
      <AddressAutocomplete
        v-model="journey.from"
        placeholder="From"
        @change="updateJourneyTemplate(journey, 'from')"
      />
      <AddressAutocomplete
        v-model="journey.to"
        placeholder="To"
        @change="updateJourneyTemplate(journey, 'to')"
      />
      <input
        v-model.number="journey.miles"
        type="number"
        placeholder="Miles"
        @change="updateJourneyTemplate(journey, 'miles')"
      >
      <i
        class="fas fa-fw fa-trash"
        @click="deleteJourneyTemplate(journey)"
      />
    </data-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  useCreateJourneyTemplate,
  useDestroyJourneyTemplate,
  useReadJourneyTemplate,
  useUpdateJourneyTemplate,
} from '../composables/useJourneyTemplateCrud';
import { JourneyTemplate } from '../generated/graphql';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  setup() {
    const { models: journeys } = useReadJourneyTemplate();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateJourneyTemplate();
    const { update } = useUpdateJourneyTemplate();
    const { destroy } = useDestroyJourneyTemplate();
    /* eslint-enable @typescript-eslint/unbound-method */

    return {
      // Clone the readonly journeys array
      journeys: computed(() => journeys.value && journeys.value.map((journey) => ({ ...journey }))),

      // Create a journey template in the database
      createJourneyTemplate(): Promise<JourneyTemplate> {
        return create({
          name: '',
          description: '',
          to: '',
          from: '',
          miles: 0,
        });
      },

      // Save the field that changed to the database
      updateJourneyTemplate(journey: JourneyTemplate, field: keyof JourneyTemplate): Promise<JourneyTemplate> {
        return update(journey._id, {
          [field]: journey[field],
        });
      },

      // Delete the journey template from the database
      deleteJourneyTemplate(journey: JourneyTemplate): Promise<string> {
        return destroy(journey._id);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid :deep(.row) {
  grid-template-columns: 8em 12em 1fr 1fr 4em auto;

  input {
    font-size: inherit;
  }

  .fa-trash {
    padding: 3px;
    color: hsl(0, 50%, 50%);
  }
}
</style>
