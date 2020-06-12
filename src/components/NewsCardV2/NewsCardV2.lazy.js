import React, { lazy, Suspense } from 'react';

const LazyNewsCardV2 = lazy(() => import('./NewsCardV2'));

const NewsCardV2 = props => (
  <Suspense fallback={null}>
    <LazyNewsCardV2 {...props} />
  </Suspense>
);

export default NewsCardV2;
