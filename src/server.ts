import { LoadContent } from './scrappers/load_content';

import http from 'http';
import { blockData } from './product_data/block.data';
import { LocationsEnum } from './product_data/locations.enum';

const hostname = '127.0.0.1';
const port = 3000;

const queue = [
  {
    identifier: blockData.get(LocationsEnum.LV),
    type: 'Block Storage',
    quantity: 12,
  },
  {
    identifier: blockData.get(LocationsEnum.NY),
    type: 'Block Storage',
    quantity: 12,
  },
  {
    identifier: blockData.get(LocationsEnum.LUX),
    type: 'Block Storage',
    quantity: 12,
  },
  {
    identifier: blockData.get(LocationsEnum.MIA),
    type: 'Block Storage',
    quantity: 12,
  },

  {
    identifier: blockData.get(LocationsEnum.LV),
    type: 'AMD Ryzen KVM',
    quantity: 10,
  },
  {
    identifier: blockData.get(LocationsEnum.NY),
    type: 'AMD Ryzen KVM',
    quantity: 10,
  },
  {
    identifier: blockData.get(LocationsEnum.LUX),
    type: 'AMD Ryzen KVM',
    quantity: 10,
  },
  {
    identifier: blockData.get(LocationsEnum.MIA),
    type: 'AMD Ryzen KVM',
    quantity: 10,
  },
];

let lastUpdateTime: number = 0;

let bulkPayload = new Array(8);

let cacheResponse: string = '';

(async () => {
  let instance = 0;

  setInterval(async () => {
    queue.push(queue[0]);

    const currJob = queue.shift();

    const date = new Date();

    // 👇️ timestamp in milliseconds
    lastUpdateTime = date.getTime();

    const data = await LoadContent(
      currJob?.identifier?.url_id ?? 0,
      currJob?.quantity ?? 12,
      currJob?.identifier?.long_name ?? 'AMD',
      currJob?.type ?? '',
    );

    bulkPayload[instance] = data;

    if (instance === 7) {
      instance = 0;
    } else {
      instance = instance + 1;
    }

    cacheResponse = `${String(lastUpdateTime)}::::${JSON.stringify(
      bulkPayload.flat(),
    )}`;

    console.log(
      `Data for ${currJob?.identifier?.long_name} completed, queuing next.`,
    );

    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(
      `The script uses approximately ${Math.round(used * 100) / 100} MB`,
    );
  }, 5000);
})();

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(cacheResponse);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
