<template>
  <input
    ref="input"
    v-model="value"
    class="address-autocomplete"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
</template>

<script lang="ts">
import {
  Ref, defineComponent, onMounted, ref, toRefs, watch,
} from 'vue';
import useGoogleMapsApi from '../composables/useGoogleMapsApi';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['change', 'input', 'update:modelValue'],

  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const { lazyLoad } = useGoogleMapsApi();

    const input: Ref<HTMLInputElement | null> = ref(null);
    const value: Ref<string> = ref('');

    onMounted(async () => {
      if (!input.value) {
        return;
      }

      // Instantiate the Google Maps place search autocomplete widget
      const googleMaps = await lazyLoad();
      const autocomplete = new googleMaps.places.Autocomplete(input.value, {
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address'],
      });
      autocomplete.addListener('place_changed', () => {
        const address = autocomplete.getPlace().formatted_address;
        if (!address) {
          return;
        }

        // Trim off the trailing country code if present
        value.value = address.endsWith(', USA') ? address.slice(0, -5) : address;
      });

      // Sync up with changes from the outside
      watch(modelValue, () => {
        value.value = modelValue.value;
      }, { immediate: true });

      // Notify parents of changes from the inside
      watch(value, () => {
        emit('update:modelValue', value.value);
        emit('change', value.value);
      });
    });

    return {
      input,
      value,
    };
  },
});
</script>
