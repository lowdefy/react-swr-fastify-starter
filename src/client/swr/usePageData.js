import useSWR from 'swr';

function fetchPageData(pageId) {
  return fetch(`/api/page/${pageId}`).then((res) => res.json());
}

function usePageData(pageId) {
  const { data } = useSWR(pageId, fetchPageData);
  console.log('usePageData', data);
  return { data };
}

export default usePageData;
