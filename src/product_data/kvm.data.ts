import { KVMTypes } from '../types';
import { LocationsEnum } from './locations.enum';

const kvmData = new Map<LocationsEnum, KVMTypes>();

kvmData.set(LocationsEnum.LV, {
  url_id: 37,
  long_name: 'Las Vegas',
});

kvmData.set(LocationsEnum.NY, {
  url_id: 38,
  long_name: 'New York',
});

kvmData.set(LocationsEnum.MIA, {
  url_id: 48,
  long_name: 'Miami',
});

kvmData.set(LocationsEnum.LUX, {
  url_id: 39,
  long_name: 'Luxenbourg',
});

export { kvmData };
