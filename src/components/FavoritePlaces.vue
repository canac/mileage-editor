<template>
  <div
    class="favorite-places"
  >
    <h1>Favorite Places</h1>
    <data-grid
      v-slot="{ row: place }"
      :rows="places"
      :create-new-row="makeNewPlace"
      :focus-selector="'input:nth-of-type(1)'"
    >
      <input
        v-model="place.name"
        placeholder="Name"
      >
      <AddressAutocomplete
        v-model="place.address"
        placeholder="Address"
      />
    </data-grid>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import useFavoritePlaces from '../composables/useFavoritePlaces';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  setup() {
    const { makeNewPlace, favoritePlaces: places } = useFavoritePlaces();

    return {
      places,
      makeNewPlace,
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid :deep(.row) {
  grid-template-columns: 1fr 3fr;

  input {
    font-size: 1.5em;
  }
}
</style>
