import Fastify from 'fastify';

import api from './routes/api';
import client from './routes/client';
import publicFolder from './routes/public';
import serveHtml from './routes/serveHtml';

const fastify = Fastify({
  logger: true,
});

fastify.register(api);
fastify.register(client);
fastify.register(publicFolder);
fastify.register(serveHtml);

fastify.listen(3000, (err) => {
  if (err) throw err;
});
