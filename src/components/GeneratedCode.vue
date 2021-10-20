<template>
  <div class="generated-code">
    <details>
      <summary>
        Generated code
        <button @click="copyMileage()">Copy mileage</button>
        <button @click="copyTolls()">Copy tolls</button>
      </summary>
      <pre>{{ generatedMileageCode }}{{ generatedTollsCode }}</pre>
    </details>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useReadJourney } from '../composables/useMileageLogCrud';
import { Journey } from '../generated/graphql';

/* eslint-disable
  no-undef,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-assignment
*/
function populateMileageLog(journeys: Journey[]) {
  const { journeyGrid } = Ext.getCmp('mileageExpenseTab').items.items[0];

  journeys.forEach((journey, index) => {
    journeyGrid.store.addNewJourney();
    journeyGrid.addSelectedRowCssClass(index);

    const expense = journeyGrid.store.data.items[index];
    expense.set('TransactionDate', new Date(journey.date));
    expense.set('Description', journey.description);
    expense.set('FromLocation', journey.from);
    expense.set('ToLocation', journey.to);
    expense.set('BusinessDistance', journey.miles);
  });
}
/* eslint-enable */

/* eslint-disable
  no-undef,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-assignment
*/
function populateTolls(journeys: Journey[]) {
  const { store } = Ext.getCmp('QuickExpenseGrid');

  journeys
    .filter((journey) => journey.tolls > 0)
    .forEach((journey, index) => {
      store.addCexp();

      const expense = store.data.items[index];
      expense.set('TransactionDate', new Date(journey.date));
      expense.set('Description', `${journey.description} tolls`);
      expense.set('ExpKey', 'CARFR');
      expense.set('TransactionAmount', journey.tolls / 100);
    });
}
/* eslint-enable */

export default defineComponent({
  setup() {
    const { models: journeys } = useReadJourney();

    const serializedData = computed((): string => {
      const data = (journeys.value ?? []).map(
        ({ _id, __typename, ...fields }) => fields,
      );
      return JSON.stringify(data, null, 2);
    });

    const generatedMileageCode = computed(
      (): string =>
        `(${populateMileageLog.toString()})(${serializedData.value});`,
    );

    const generatedTollsCode = computed(
      (): string => `(${populateTolls.toString()})(${serializedData.value});`,
    );

    async function copyMileage() {
      await navigator.clipboard.writeText(generatedMileageCode.value);
    }

    async function copyTolls() {
      await navigator.clipboard.writeText(generatedTollsCode.value);
    }

    return {
      generatedMileageCode,
      generatedTollsCode,
      copyMileage,
      copyTolls,
    };
  },
});
</script>

<style lang="scss">
button {
  margin-left: 1em;
}
</style>
