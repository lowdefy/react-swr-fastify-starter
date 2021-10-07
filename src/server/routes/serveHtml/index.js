import home from './home';
import serveHtml from './serveHtml';

async function routes(fastify) {
  fastify.get('/', home);
  fastify.get('/:pageId', serveHtml);
}

export default routes;
