import { useReadFavoritePlace } from './useFavoritePlacesCrud';

// Attempt to expand an address shortcut to a full address
export default function useExpandAddress(): {
  expandAddress: (address: string) => string;
} {
  const { models: favoritePlaces } = useReadFavoritePlace();

  return {
    expandAddress(address: string): string {
      for (const place of favoritePlaces.value ?? []) {
        if (address.toLowerCase() === place.name.toLowerCase()) {
          return place.address;
        }
      }

      // Leave the address unchanged
      return address;
    },
  };
}
