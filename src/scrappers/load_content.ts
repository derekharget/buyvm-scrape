import { JSDOM } from 'jsdom';
import { fetchPage } from '../fetch_util/fetchPage';
import { quantityIdScrap } from './quantity_id.scrapper';
import { LoadedContentType } from 'src/types/loadedContent.types';

export const LoadContent = async (
  url_identifier: number,
  quantity: number,
  location: string,
  type: string,
): Promise<LoadedContentType[]> => {
  const res = await fetchPage(
    `https://my.frantech.ca/cart.php?gid=${String(url_identifier)}`,
  );

  const dom = new JSDOM(res);

  const page = dom.window.document.body;

  const returnData: LoadedContentType[] = [];

  for (let i = 0; i <= quantity; i++) {
    let product_key = i + 1;

    const data = page.querySelector(`div#product${String(product_key)}`);

    const scrap = quantityIdScrap(data);

    if (scrap.id === 0) {
      continue;
    }

    returnData.push({ location, type, ...scrap });
  }

  return returnData;
};
