import loadGoogleMapsApi from 'load-google-maps-api';

type GoogleMaps = typeof google.maps;

const { VITE_GOOGLE_API_KEY } = import.meta.env;
const apiKey = typeof VITE_GOOGLE_API_KEY === 'string' ? VITE_GOOGLE_API_KEY : '';

export default function useGoogleMapsApi(): {
  lazyLoad: () => Promise<GoogleMaps>;
  } {
  let mapsApiPromise: Promise<GoogleMaps> | null = null;

  function lazyLoad() {
    mapsApiPromise ??= loadGoogleMapsApi({
      key: apiKey,
      libraries: ['places'],
    });
    return mapsApiPromise;
  }

  return {
    lazyLoad,
  };
}
