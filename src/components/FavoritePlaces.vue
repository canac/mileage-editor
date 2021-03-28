<template>
  <div
    class="favorite-places"
  >
    <data-grid
      v-slot="{ row: place }"
      :rows="places"
      :create-new-row="createFavoritePlace"
    >
      <input
        v-model="place.name"
        placeholder="Name"
        @change="updateFavoritePlace(place, 'name')"
      >
      <AddressAutocomplete
        v-model="place.address"
        placeholder="Address"
        @change="updateFavoritePlace(place, 'address')"
      />
      <i
        class="fas fa-fw fa-trash"
        @click="deleteFavoritePlace(place)"
      />
    </data-grid>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {
  useCreateFavoritePlace,
  useDestroyFavoritePlace,
  useReadFavoritePlace,
  useUpdateFavoritePlace,
} from '../composables/useFavoritePlacesCrud';
import { FavoritePlace } from '../generated/graphql';
import AddressAutocomplete from './AddressAutocomplete.vue';
import DataGrid from './DataGrid.vue';

export default defineComponent({
  components: {
    AddressAutocomplete,
    DataGrid,
  },

  setup() {
    const { models: favoritePlaces } = useReadFavoritePlace();
    /* eslint-disable @typescript-eslint/unbound-method */
    const { create } = useCreateFavoritePlace();
    const { update } = useUpdateFavoritePlace();
    const { destroy } = useDestroyFavoritePlace();
    /* eslint-enable @typescript-eslint/unbound-method */

    return {
      // Clone the readonly places array
      places: computed(() => favoritePlaces.value && favoritePlaces.value.map((place) => ({ ...place }))),

      // Create a new favorite place in the database
      createFavoritePlace(): Promise<FavoritePlace> {
        return create({
          name: '',
          address: '',
        });
      },

      // Save the field that changed to the database
      updateFavoritePlace(place: FavoritePlace, field: keyof FavoritePlace): Promise<FavoritePlace> {
        return update(place._id, {
          [field]: place[field],
        });
      },

      // Delete the favorite place from the database
      deleteFavoritePlace(place: FavoritePlace): Promise<string> {
        return destroy(place._id);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid :deep(.row) {
  grid-template-columns: 1fr 3fr auto;

  input {
    font-size: inherit;
  }

  .fa-trash {
    padding: 3px;
    color: hsl(0, 50%, 50%);
  }
}
</style>
