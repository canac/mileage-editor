import { Ref, ref } from 'vue';
import { MileageEntry } from '../types';

// Generate a new mileage entry with default values
function makeNewEntry(): MileageEntry {
  return {
    date: new Date().toISOString().slice(0, 10), // today
    to: '',
    from: '',
    miles: 0,
  };
}

const mileageLog: Ref<MileageEntry[]> = ref([
  makeNewEntry(),
]);

export default function useMileageLog(): {
  makeNewEntry: () => MileageEntry,
  mileageLog: Ref<MileageEntry[]>,
  } {
  return {
    makeNewEntry,
    mileageLog,
  };
}
