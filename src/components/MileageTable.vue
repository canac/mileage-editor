<template>
  <div
    class="mileage-table"
  >
    <h1>Mileage Log</h1>
    <data-grid
      v-slot="{ row: entry }"
      :rows="mileageLog"
      :create-new-row="createJourney"
    >
      <input
        v-model="entry.date"
        placeholder="Date"
        type="date"
        @change="updateJourney(entry, 'date')"
      >
      <input
        v-model="entry.description"
        placeholder="Description"
        @change="updateJourney(entry, 'description')"
      >
      <AddressAutocomplete
        v-model="entry.to"
        placeholder="To"
        @input="entry.to = expandAddress(entry.to)"
        @change="updateJourney(entry, 'to')"
      />
      <AddressAutocomplete
        v-model="entry.from"
        placeholder="From"
        @input="entry.from = expandAddress(entry.from)"
        @change="updateJourney(entry, 'from')"
      />
      <input
        v-model.number="entry.miles"
        placeholder="Miles"
        type="number"
        @change="updateJourney(entry, 'miles')"
      >
    </data-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useReadFavoritePlace } from '../composables/useFavoritePlacesCrud';
import { useCreateJourney, useReadJourney, useUpdateJourney } from '../composables/useMileageLogCrud';
import { Journey } from '../generated/graphql';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  setup() {
    const { models: favoritePlaces } = useReadFavoritePlace();
    const { models: mileageLog } = useReadJourney();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateJourney();
    const { update } = useUpdateJourney();
    /* eslint-enable @typescript-eslint/unbound-method */

    // Attempt to expand an address shortcut to a full address
    function expandAddress(address: string): string {
      for (const place of favoritePlaces.value) {
        if (address.toLowerCase() === place.name.toLowerCase()) {
          return place.address;
        }
      }

      // Leave the address unchanged
      return address;
    }

    // Create a new journey in the database
    function createJourney(): Promise<Journey> {
      return create({
        date: new Date().toISOString().slice(0, 10), // today
        description: '',
        to: '',
        from: '',
        miles: 0,
      });
    }

    // Save the field that changed to the database
    async function updateJourney(journey: Journey, field: keyof Journey): Promise<Journey> {
      return update(journey._id, {
        [field]: journey[field],
      });
    }

    return {
      // Clone the readonly mileage log array
      mileageLog: computed(() => mileageLog.value.map((journey) => ({ ...journey }))),

      createJourney,
      updateJourney,
      expandAddress,
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid :deep(.row) {
  grid-template-columns: 12em 16em 1fr 1fr 8em;

  input {
    font-size: 1.25em;
  }
}
</style>
