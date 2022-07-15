import { QuantityIDType } from '../types/quantityId.types';




export const quantityIdScrap = (html: Element | null): QuantityIDType  => {

  // Oh shit moment, didn't want to handle errors so yolo.
  if (typeof html === 'undefined' || !html) {
    return { id: 0, name: '', quantity: 0 };
  }

  const name = html.querySelector('h3.package-name')?.innerHTML ?? '';

  const id = Number((html.querySelector('a')?.href ?? '0').split('pid=')[1]);

  const quantity = Number(html.querySelector('div.package-qty')?.innerHTML.split('Available')[0].split('').filter(el=>el !== ' ').splice(1).join() ?? 999);

  return {
    name,
    id,
    quantity
  }

}
