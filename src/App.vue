<template>
  <div class="app">
    <MileageTable />
    <div class="blank-space" />
    <FavoritePlaces />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FavoritePlaces from './components/FavoritePlaces.vue';
import MileageTable from './components/MileageTable.vue';

export default defineComponent({
  name: 'App',
  components: {
    FavoritePlaces,
    MileageTable,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  --root-margin: 8px;
  margin: var(--root-margin);
  height: calc(100vh - var(--root-margin) * 2);
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
