<template>
  <div class="app">
    <MileageTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MileageTable from './components/MileageTable.vue';

export default defineComponent({
  name: 'App',
  components: {
    MileageTable,
  },
});
</script>
