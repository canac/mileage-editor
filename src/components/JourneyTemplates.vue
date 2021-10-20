<template>
  <div class="journey-templates">
    <data-grid
      v-slot="{ row: journey }"
      :rows="journeys"
      :create-new-row="createJourneyTemplate"
    >
      <input
        v-model="journey.name"
        class="name"
        placeholder="Name"
        @change="updateJourneyTemplate(journey, 'name')"
      />
      <input
        v-model="journey.description"
        class="description"
        placeholder="Description"
        @change="updateJourneyTemplate(journey, 'description')"
      />
      <AddressAutocomplete
        v-model="journey.from"
        class="from"
        placeholder="From"
        @change="updateJourneyTemplate(journey, 'from')"
      />
      <AddressAutocomplete
        v-model="journey.to"
        class="to"
        placeholder="To"
        @change="updateJourneyTemplate(journey, 'to')"
      />
      <input
        v-model.number="journey.miles"
        class="miles"
        type="number"
        placeholder="Miles"
        @change="updateJourneyTemplate(journey, 'miles')"
      />
      <div class="actions">
        <i class="fas fa-fw fa-trash" @click="deleteJourneyTemplate(journey)" />
      </div>
    </data-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
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

  emits: ['loaded'],

  setup(props, { emit }) {
    const { models: journeys, loading } = useReadJourneyTemplate();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateJourneyTemplate();
    const { update } = useUpdateJourneyTemplate();
    const { destroy } = useDestroyJourneyTemplate();
    /* eslint-enable @typescript-eslint/unbound-method */

    watch(loading, () => {
      if (loading.value === false) {
        emit('loaded');
      }
    });

    return {
      // Clone the readonly journeys array
      journeys: computed(
        () =>
          journeys.value && journeys.value.map((journey) => ({ ...journey })),
      ),

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
      updateJourneyTemplate(
        journey: JourneyTemplate,
        field: keyof JourneyTemplate,
      ): Promise<JourneyTemplate> {
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
@import '../mixins/datagrid.scss';
@import '../mixins/multiline-datagrid.scss';

.data-grid :deep(.row) {
  @include datagrid;

  .name {
    grid-area: name;
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

  grid-template-areas: 'name description from to miles actions';
  grid-template-columns: 8em 12em 1fr 1fr 4em auto;

  @media (max-width: 1024px) {
    @include multiline-datagrid;

    grid-template-areas:
      'name description miles'
      'from to actions';
    grid-template-columns: 1fr 1fr 4em;
  }

  @media (max-width: 512px) {
    @include multiline-datagrid;

    grid-template-areas:
      'name'
      'description'
      'from'
      'to'
      'miles'
      'actions';
    grid-template-columns: 1fr;
  }
}
</style>
