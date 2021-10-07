import React from 'react';
import { useParams } from 'react-router-dom';
import usePageData from '../swr/usePageData';

const Page = () => {
  const { pageId } = useParams();
  const { data } = usePageData(pageId);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <h1>{`This is page ${pageId}`}</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Page;
