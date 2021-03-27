<template>
  <div class="app">
    <p class="header">
      Mileage Table
    </p>
    <MileageTable />
    <div class="blank-space" />
    <details>
      <summary class="header">
        Journey Templates
      </summary>
      <JourneyTemplates />
    </details>
    <details>
      <summary class="header">
        Favorite Places
      </summary>
      <FavoritePlaces />
    </details>
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
import JourneyTemplates from './JourneyTemplates.vue';
import MileageTable from './MileageTable.vue';
import NavBar from './NavBar.vue';

import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

export default defineComponent({
  name: 'App',
  components: {
    FavoritePlaces,
    GeneratedCode,
    JourneyTemplates,
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

summary {
  cursor: pointer;
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

  .header {
    font-size: 1.5em;
    font-weight: bold;
    margin-block-end: 0.67em;
    margin-block-start: 0.67em;
  }
}
</style>
