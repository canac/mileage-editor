<template>
  <div
    ref="favoritePlaces"
    class="favorite-places"
  >
    <h1>Favorite Places</h1>
    <form
      v-for="(place, index) in places"
      :key="index"
      class="favorite-place"
      @submit.prevent="onSubmit(index)"
    >
      <input
        v-model="place.name"
        placeholder="Name"
      >
      <input
        v-model="place.address"
        placeholder="Address"
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
import { FavoritePlace } from '../types';

export default defineComponent({
  setup() {
    // Generate a new favorite place with default values
    function makeNewPlace(): FavoritePlace {
      return {
        name: '',
        address: '',
      };
    }

    const places: Ref<FavoritePlace[]> = ref([makeNewPlace()]);
    const favoritePlaces: Ref<HTMLElement | null> = ref(null);

    async function onSubmit(index: number) {
      if (index === places.value.length - 1) {
        // If we submitted the last place, create a new place
        places.value = [...places.value, makeNewPlace()];

        // Wait for the DOM to update, which will create the new place
        await nextTick();
      }

      // Now focus the newly created place
      if (favoritePlaces.value) {
        const input: HTMLElement | null = favoritePlaces.value
          .querySelector(`.favorite-place:nth-of-type(${index + 2}) input`);
        if (input) {
          input.focus();
        }
      }
    }

    return {
      places,
      onSubmit,
      favoritePlaces,
    };
  },
});
</script>

<style lang="scss" scoped>
.favorite-place {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1em;
  padding-bottom: 1em;

  input {
    font-size: 1.5em;
  }
}
</style>
