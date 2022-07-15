import { BlockType } from '../types';
import { LocationsEnum } from './locations.enum';

const blockData = new Map<LocationsEnum, BlockType>();

blockData.set(LocationsEnum.LV, {
  url_id: 42,
  long_name: 'Las Vegas',
});

blockData.set(LocationsEnum.NY, {
  url_id: 45,
  long_name: 'New York',
});

blockData.set(LocationsEnum.MIA, {
  url_id: 49,
  long_name: 'Miami',
});

blockData.set(LocationsEnum.LUX, {
  url_id: 46,
  long_name: 'Luxenbourg',
});

export { blockData };
