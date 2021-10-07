const pages = {
  home: {
    id: 'home',
    title: 'Home',
  },
  other: {
    id: 'other',
    title: 'Other Page',
  },
};

function page(request, reply) {
  const { pageId } = request.params;
  reply.send(pages[pageId]);
}

export default page;
