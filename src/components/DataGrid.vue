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
  PropType, Ref, defineComponent, nextTick, ref, toRefs, watch,
} from 'vue';

export default defineComponent({
  props: {
    rows: {
      type: Object as PropType<unknown[] | undefined>,
      default: undefined,
    },

    createNewRow: {
      type: Function as PropType<() => unknown>,
      required: true,
    },

    columnSelector: {
      type: String,
      default: 'input',
    },
  },

  setup(props) {
    const gridRef: Ref<HTMLElement | null> = ref(null);
    const { createNewRow } = props;
    const { rows } = toRefs(props);

    // Create a new row whenever there aren't any
    watch(rows, async () => {
      if (rows.value && rows.value.length === 0) {
        rows.value.push(await createNewRow());
      }
    });

    async function onSubmit(index: number) {
      if (!gridRef.value || !rows.value) {
        return;
      }

      // Determine which column of the grid is currently focused
      const columns = Array.from(gridRef.value.querySelectorAll<HTMLElement>(
        `.row:nth-of-type(${index + 1}) ${props.columnSelector}`,
      ));
      const focusedInput = gridRef.value.querySelector<HTMLElement>(':focus');
      const focusedColumn = focusedInput ? columns.indexOf(focusedInput) : -1;
      if (focusedColumn === -1) {
        return;
      }

      // If the last column is focused, advance the focus to the next row
      if (focusedColumn === columns.length - 1) {
        // If this is the last row
        if (index === rows.value.length - 1) {
          // Then create a new row
          rows.value.push(await createNewRow());

          // Wait for the DOM to update, which will create the new row in the DOM
          await nextTick();
        }

        const [firstColumn] = Array.from(gridRef.value.querySelectorAll<HTMLElement>(
          `.row:nth-of-type(${index + 2}) ${props.columnSelector}`,
        ));
        if (firstColumn) {
          firstColumn.focus();
        }
      } else {
        // Otherwise, advance the focus to the next column
        columns[focusedColumn + 1].focus();
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
  margin-bottom: 1em;
  grid-column-gap: 1em;
}
</style>
