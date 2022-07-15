
import { fetchPage } from './fetch_util/fetchPage';
import { JSDOM } from 'jsdom';
import { quantityIdScrap } from './scrappers/quantity_id.scrapper';
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

(async () => {
const res = await fetchPage('https://my.frantech.ca/cart.php?gid=37');

const dom = new JSDOM(res);

const page = dom.window.document.body;

  const data = page.querySelector('div#product1');

  const p = quantityIdScrap(data);

  console.log(p);
})();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
