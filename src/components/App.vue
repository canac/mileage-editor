<template>
  <div class="app">
    <NavBar />
    <p class="header">Mileage Table</p>
    <div v-show="loaded" class="content">
      <MileageTable @loaded="loaded = true" />
      <details>
        <summary class="header">Journey Templates</summary>
        <JourneyTemplates />
      </details>
      <details>
        <summary class="header">Favorite Places</summary>
        <FavoritePlaces />
      </details>
      <GeneratedCode />
    </div>
  </div>
</template>

<script lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable';
import { defineComponent, inject, provide, ref, watchEffect } from 'vue';
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

    return {
      // Show the components only after the MileageTable finishes loading to avoid CLS
      loaded: ref(false),
    };
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
  --root-margin: 8px;
  display: flex;
  min-height: calc(100vh - var(--root-margin) * 2);
  flex-direction: column;
  margin: var(--root-margin);

  .nav-bar {
    font-size: calc(min(6vw, 3em));
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .mileage-table {
    flex: 1;
  }

  .header {
    font-size: 1.5em;
    font-weight: bold;
    margin-block-end: 0.67em;
    margin-block-start: 0.67em;
  }
}
</style>
