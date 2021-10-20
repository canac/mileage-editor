<template>
  <div v-if="!loading" class="reimbursement-totals">
    {{ formatMoney(mileageTotal) }} in gas, {{ formatMoney(tollsTotal) }} in
    tolls
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useReadJourney } from '../composables/useMileageLogCrud';

export default defineComponent({
  setup() {
    const { models: journeys, loading } = useReadJourney();

    function formatMoney(amount: number) {
      return `$${amount.toFixed(2)}`;
    }

    const mileageTotal = computed(
      (): number =>
        (journeys.value ?? []).reduce(
          (total, journey) => total + journey.miles,
          0,
        ) * 0.56,
    );

    const tollsTotal = computed(
      (): number =>
        (journeys.value ?? []).reduce(
          (total, journey) => total + journey.tolls,
          0,
        ) / 100,
    );

    return {
      loading,
      mileageTotal,
      tollsTotal,
      formatMoney,
    };
  },
});
</script>

<style lang="scss" scoped>
.reimbursement-totals {
  display: inline;
}
</style>
