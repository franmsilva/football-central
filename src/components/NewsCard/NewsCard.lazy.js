import React, { lazy, Suspense } from 'react';

const LazyNewsCard = lazy(() => import('./NewsCard'));

const NewsCard = props => (
  <Suspense fallback={null}>
    <LazyNewsCard {...props} />
  </Suspense>
);

export default NewsCard;
