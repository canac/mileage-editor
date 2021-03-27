<template>
  <div class="generated-code">
    <details>
      <summary>
        Generated code
        <button @click="copy()">
          Copy
        </button>
      </summary>
      <pre>{{ generatedCode }}</pre>
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
function populateMileageLog(mileageLog: Journey[]) {
  const { journeyGrid } = Ext.getCmp('mileageExpenseTab').items.items[0];

  mileageLog.forEach((entry, index) => {
    journeyGrid.store.addNewJourney();
    journeyGrid.addSelectedRowCssClass(index);

    const expense = journeyGrid.store.data.items[index];
    expense.set('TransactionDate', new Date(entry.date));
    expense.set('Description', entry.description);
    expense.set('FromLocation', entry.from);
    expense.set('ToLocation', entry.to);
    expense.set('BusinessDistance', entry.miles);
  });
}
/* eslint-enable */

export default defineComponent({
  setup() {
    const { models: mileageLog } = useReadJourney();

    const generatedCode = computed((): string => {
      const func = populateMileageLog.toString();
      const data = (mileageLog.value ?? []).map(({ _id, __typename, ...fields }) => fields);
      return `(${func})(${JSON.stringify(data, null, 2)});`;
    });

    async function copy() {
      await navigator.clipboard.writeText(generatedCode.value);
    }

    return {
      generatedCode,
      copy,
    };
  },
});
</script>
