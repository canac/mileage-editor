<template>
  <input
    ref="input"
    v-model="address"
    class="address-autocomplete"
    @change="onChange()"
    @focus.once="setupMapsAPI()"
  >
</template>

<script lang="ts">
import {
  Ref, defineComponent, ref, toRefs, watch,
} from 'vue';
import useExpandAddress from '../composables/useExpandAddress';
import useGoogleMapsApi from '../composables/useGoogleMapsApi';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },

    // Flag for whether we should automatically expand favorite addresses into a full address
    expandFavorites: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    const { modelValue, expandFavorites } = toRefs(props);

    const { lazyLoad } = useGoogleMapsApi();
    const { expandAddress } = useExpandAddress();

    const input: Ref<HTMLInputElement | null> = ref(null);
    const address: Ref<string> = ref('');

    // Notify parents of changes to the address
    function broadcastChange() {
      emit('update:modelValue', address.value);
      emit('change', address.value);
    }

    // Called when the address input's value changes
    function onChange() {
      if (expandFavorites.value) {
        address.value = expandAddress(address.value);
      }

      broadcastChange();
    }

    // Load and initialize the Google Maps autocomplete API
    // Setup is deferred and lazy-loaded only after the autocomplete is focused so that it won't be unnecessarily
    // loaded if it won't even be used
    async function setupMapsAPI() {
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
        const newAddress = autocomplete.getPlace().formatted_address;
        if (!newAddress) {
          return;
        }

        // Trim off the trailing country code if present
        address.value = newAddress.endsWith(', USA') ? newAddress.slice(0, -5) : newAddress;
        broadcastChange();
      });
    }

    // Sync up with changes from the outside
    watch(modelValue, () => {
      address.value = modelValue.value;
    }, { immediate: true });

    return {
      input,
      address,
      onChange,
      setupMapsAPI,
    };
  },
});
</script>
