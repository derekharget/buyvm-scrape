import { QuantityIDType } from './quantityId.types';

export interface LoadedContentType extends QuantityIDType {
  location: string;
  type: string;
}
