<template>
  <div
    ref="gridRef"
    class="data-grid"
  >
    <form
      v-for="(row, index) in rows"
      :key="index"
      class="row"
      @submit.prevent="onSubmit(index)"
    >
      <slot :row="row" />
      <button
        type="submit"
        style="display: none;"
      />
    </form>
  </div>
</template>

<script lang="ts">
import {
  PropType, Ref, defineComponent, nextTick, ref, toRefs,
} from 'vue';

export default defineComponent({
  props: {
    rows: {
      type: Object as PropType<unknown[]>,
      required: true,
    },

    createNewRow: {
      type: Function as PropType<() => unknown>,
      required: true,
    },

    focusSelector: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const gridRef: Ref<HTMLElement | null> = ref(null);
    const { rows, createNewRow } = toRefs(props);

    async function onSubmit(index: number) {
      if (index === rows.value.length - 1) {
        // If we submitted the last row, create a new row
        rows.value.push(createNewRow.value());

        // Wait for the DOM to update, which will create the new row
        await nextTick();
      }

      // Now focus the newly created row
      if (gridRef.value) {
        const input: HTMLElement | null = gridRef.value
          .querySelector(`.row:nth-of-type(${index + 2}) ${props.focusSelector}`);
        if (input) {
          input.focus();
        }
      }
    }

    return {
      onSubmit,
      gridRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.data-grid .row {
  display: grid;
  grid-column-gap: 1em;
  padding-bottom: 1em;
}
</style>
