import {
  Auth0Client,
  Auth0ClientOptions,
  GetIdTokenClaimsOptions,
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from '@auth0/auth0-spa-js';
import {
  App, ComputedRef, InjectionKey, Plugin, computed, reactive,
} from 'vue';
import AsyncAuth0Client from './AsyncAuth0Client';

const asyncClient: AsyncAuth0Client = new AsyncAuth0Client();

interface Auth0PluginState {
  loading: boolean,
  isAuthenticated: boolean;
  user: User | undefined,
  popupOpen: boolean;
  error: unknown;
}

const state = reactive<Auth0PluginState>({
  loading: true,
  isAuthenticated: false,
  user: {},
  popupOpen: false,
  error: null,
});

async function handleRedirectCallback() {
  const client = await asyncClient.getClient();

  state.loading = true;

  try {
    await client.handleRedirectCallback();
    state.user = await client.getUser();
    state.isAuthenticated = true;
  } catch (err) {
    state.error = err;
  } finally {
    state.loading = false;
  }
}

async function loginWithRedirect(o: RedirectLoginOptions) {
  const client = await asyncClient.getClient();
  return client.loginWithRedirect(o);
}

async function getIdTokenClaims(o: GetIdTokenClaimsOptions) {
  const client = await asyncClient.getClient();
  return client.getIdTokenClaims(o);
}

async function getTokenSilently(o: GetTokenSilentlyOptions) {
  const client = await asyncClient.getClient();
  return client.getTokenSilently(o);
}

async function getTokenWithPopup(o: GetTokenWithPopupOptions) {
  const client = await asyncClient.getClient();
  return client.getTokenWithPopup(o);
}

async function logout(o: LogoutOptions) {
  const client = await asyncClient.getClient();
  return client.logout(o);
}

export interface Auth0 extends Pick<Auth0Client, 'getIdTokenClaims' | 'getTokenSilently' | 'getTokenWithPopup' |
  'loginWithRedirect' | 'logout'> {
  isAuthenticated: ComputedRef<boolean>;
  loading: ComputedRef<boolean>;
  user: ComputedRef<User | undefined>;
  handleRedirectCallback: () => Promise<void>;
}

const authPlugin: Auth0 = {
  isAuthenticated: computed(() => state.isAuthenticated),
  loading: computed(() => state.loading),
  user: computed(() => state.user),
  getIdTokenClaims,
  getTokenSilently,
  getTokenWithPopup,
  handleRedirectCallback,
  loginWithRedirect,
  logout,
};

export interface Auth0PluginOptions extends Auth0ClientOptions {
  onRedirectCallback(appState: unknown): void;
}

export const AuthProvider: InjectionKey<Auth0> = Symbol('auth0');

async function init(options: Auth0PluginOptions): Promise<Plugin> {
  const client = await asyncClient.init(options);

  try {
    // If the user is returning to the app after authentication
    if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
      // handle the redirect and retrieve tokens
      const result = await client.handleRedirectCallback();

      // Notify subscribers that the redirect callback has happened, passing the appState
      // (useful for retrieving any pre-authentication state)
      options.onRedirectCallback(result.appState);
    }
  } catch (err) {
    state.error = err;
  } finally {
    // Initialize our internal authentication state
    state.isAuthenticated = await client.isAuthenticated();
    state.user = await client.getUser();
    state.loading = false;
  }

  return {
    install: (app: App) => {
      app.provide(AuthProvider, authPlugin);
    },
  };
}

interface Auth0Plugin {
  init(options: Auth0PluginOptions): Promise<Plugin>;
}

const plugin: Auth0Plugin = {
  init,
};

export default plugin;

export function getClient(): Promise<Auth0Client> {
  return asyncClient.getClient();
}
