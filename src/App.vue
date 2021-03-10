<template>
  <div class="app">
    <MileageTable />
    <div class="blank-space" />
    <FavoritePlaces />
    <GeneratedCode />
  </div>
</template>

<script lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable';
import { defineComponent, provide } from 'vue';
import apolloClient from './apollo';
import FavoritePlaces from './components/FavoritePlaces.vue';
import GeneratedCode from './components/GeneratedCode.vue';
import MileageTable from './components/MileageTable.vue';

export default defineComponent({
  name: 'App',
  components: {
    FavoritePlaces,
    GeneratedCode,
    MileageTable,
  },

  setup() {
    provide(DefaultApolloClient, apolloClient);
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
  --root-margin: 8px;
  margin: var(--root-margin);
  height: calc(100vh - var(--root-margin) * 2);
  display: grid;
  grid-template-rows: max-content 1fr max-content max-content;
}
</style>
