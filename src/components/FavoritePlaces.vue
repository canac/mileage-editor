<template>
  <div
    class="favorite-places"
  >
    <h1>Favorite Places</h1>
    <data-grid
      v-slot="{ row: place }"
      :rows="places"
      :create-new-row="makeNewPlace"
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
import { useRead } from '../composables/useFavoritePlacesCrud';
import { FavoritePlace } from '../generated/graphql';
import { defineComponent } from 'vue';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  setup() {
    const { favoritePlaces } = useRead();

    return {
      places: favoritePlaces,

      // Generate a new favorite place with default values
      makeNewPlace(): FavoritePlace {
        return {
          _id: Math.random.toString(),
          name: '',
          address: '',
        };
      },
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
