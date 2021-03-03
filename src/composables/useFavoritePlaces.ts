import { Ref, ref } from 'vue';
import { FavoritePlace } from '../types';

// Generate a new favorite place with default values
function makeNewPlace(): FavoritePlace {
  return {
    name: '',
    address: '',
  };
}

const favoritePlaces: Ref<FavoritePlace[]> = ref([makeNewPlace()]);

export default function useFavoritePlaces(): {
  makeNewPlace: () => FavoritePlace,
  favoritePlaces: Ref<FavoritePlace[]>,
  } {
  return {
    favoritePlaces,
    makeNewPlace,
  };
}
