import { createApp } from 'vue';
import Auth0Plugin from './auth/plugin';
import App from './components/App.vue';
import { getEnvVar } from './env';

async function init() {
  const authPlugin = await Auth0Plugin.init({
    onRedirectCallback(appState) {
      // Navigate back to the main state
      window.history.replaceState(appState, '', window.location.origin);
    },
    client_id: getEnvVar('VITE_AUTH0_CLIENT_ID'),
    domain: getEnvVar('VITE_AUTH0_DOMAIN'),
    audience: getEnvVar('VITE_AUTH0_AUDIENCE'),
    redirect_uri: window.location.origin,
    cacheLocation: 'localstorage',
  });
  const app = createApp(App);
  app
    .use(authPlugin)
    .mount('#app');
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
init();
