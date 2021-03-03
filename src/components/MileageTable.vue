<template>
  <div
    ref="mileageEntries"
    class="mileage-table"
  >
    <h1>Mileage Log</h1>
    <form
      v-for="(entry, index) in mileageLog"
      :key="index"
      class="mileage-entry"
      @submit.prevent="onSubmit(index)"
    >
      <input
        v-model="entry.date"
        placeholder="Date"
        type="date"
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
      <button
        type="submit"
        style="display: none;"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {
  Ref, defineComponent, nextTick, ref,
} from 'vue';
import useFavoritePlaces from '../composables/useFavoritePlaces';
import useMileageLog from '../composables/useMileageLog';
import { MileageEntry } from '../types';

export default defineComponent({
  setup() {
    const { favoritePlaces } = useFavoritePlaces();
    const { mileageLog, makeNewEntry } = useMileageLog();

    const mileageEntries: Ref<HTMLElement | null> = ref(null);

    async function onSubmit(index: number) {
      if (index === mileageLog.value.length - 1) {
        // If we submitted the last entry, create a new entry
        mileageLog.value = [...mileageLog.value, makeNewEntry()];

        // Wait for the DOM to update, which will create the new entry
        await nextTick();
      }

      // Now focus the newly created entry
      if (mileageEntries.value) {
        const input: HTMLElement | null = mileageEntries.value
          .querySelector(`.mileage-entry:nth-of-type(${index + 2}) input`);
        if (input) {
          input.focus();
        }
      }
    }

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
      onSubmit,
      expandAddress,
      mileageEntries,
    };
  },
});
</script>

<style lang="scss" scoped>
.mileage-entry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1em;
  padding-bottom: 1em;

  input {
    font-size: 1.5em;
  }
}
</style>
