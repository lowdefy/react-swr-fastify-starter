import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

async function serveHtml(request, reply) {
  const { pageId } = request.params;
  let indexHtml = await readFilePromise(path.resolve('./dist/client/index.html'), 'utf8');
  indexHtml = indexHtml.replace(/__LOWDEFY_PAGE_ID__/g, pageId);
  reply.type('text/html');
  reply.send(indexHtml);
}

export default serveHtml;
