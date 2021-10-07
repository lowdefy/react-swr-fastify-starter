import page from './page';

async function routes(fastify) {
  fastify.get('/api/page/:pageId', page);
}

export default routes;
