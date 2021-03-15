<template>
  <div class="app">
    <NavBar />
    <MileageTable />
    <div class="blank-space" />
    <FavoritePlaces />
    <GeneratedCode />
  </div>
</template>

<script lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable';
import {
  defineComponent, inject, provide, watchEffect,
} from 'vue';
import apolloClient from '../apollo';
import { Auth0, AuthProvider } from '../auth/plugin';
import FavoritePlaces from './FavoritePlaces.vue';
import GeneratedCode from './GeneratedCode.vue';
import MileageTable from './MileageTable.vue';
import NavBar from './NavBar.vue';

import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

export default defineComponent({
  name: 'App',
  components: {
    FavoritePlaces,
    GeneratedCode,
    MileageTable,
    NavBar,
  },

  setup() {
    provide(DefaultApolloClient, apolloClient);

    const auth: Auth0 | undefined = inject(AuthProvider);
    if (!auth) {
      throw new Error('Auth0 is has not been provided');
    }

    const { loading, isAuthenticated } = auth;

    // Whenever the user is logged out, automatically redirect to the login page
    watchEffect(() => {
      if (!loading.value && !isAuthenticated.value) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        auth.loginWithRedirect();
      }
    });
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style lang="scss" scoped>
.app {
  --nav-bar-height: 3em;
  --root-margin: 8px;
  display: grid;
  height: calc(100vh - var(--root-margin) * 2 - var(--nav-bar-height));
  margin: var(--root-margin);
  grid-template-rows: auto max-content 1fr max-content max-content;

  .nav-bar {
    font-size: 3em;
  }
}
</style>
