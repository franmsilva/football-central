import React, { lazy, Suspense } from 'react';

const LazyNewsCardLarge = lazy(() => import('./NewsCardLarge'));

const NewsCardLarge = props => (
  <Suspense fallback={null}>
    <LazyNewsCardLarge {...props} />
  </Suspense>
);

export default NewsCardLarge;
