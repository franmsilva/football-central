import React, { lazy, Suspense } from 'react';

const LazyNewsList = lazy(() => import('./NewsList'));

const NewsList = props => (
  <Suspense fallback={null}>
    <LazyNewsList {...props} />
  </Suspense>
);

export default NewsList;
