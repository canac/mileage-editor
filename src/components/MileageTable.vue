<template>
  <div
    class="mileage-table"
  >
    <h1>Mileage Log</h1>
    <data-grid
      v-slot="{ row: entry }"
      :rows="mileageLog"
      :create-new-row="makeNewEntry"
      :focus-selector="'input:nth-of-type(1)'"
    >
      <input
        v-model="entry.date"
        placeholder="Date"
        type="date"
      >
      <input
        v-model="entry.description"
        placeholder="Description"
      >
      <input
        v-model="entry.to"
        placeholder="To"
        @input="entry.to = expandAddress(entry.to)"
      >
      <input
        v-model="entry.from"
        placeholder="From"
        @input="entry.from = expandAddress(entry.from)"
      >
      <input
        v-model.number="entry.miles"
        placeholder="Miles"
        type="number"
      >
    </data-grid>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import useFavoritePlaces from '../composables/useFavoritePlaces';
import useMileageLog from '../composables/useMileageLog';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    DataGrid,
  },

  setup() {
    const { favoritePlaces } = useFavoritePlaces();
    const { mileageLog, makeNewEntry } = useMileageLog();

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

    return {
      favoritePlaces,
      mileageLog,
      makeNewEntry,
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
