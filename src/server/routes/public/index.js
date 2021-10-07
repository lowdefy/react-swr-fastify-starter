import path from 'path';
import fastifyStatic from 'fastify-static';

async function routes(fastify) {
  fastify.register(fastifyStatic, {
    root: path.resolve('./public'),
    prefix: '/public',
  });
}

export default routes;
