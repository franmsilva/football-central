import React, { lazy, Suspense } from 'react';

const LazyLast5Stats = lazy(() => import('./Last5Stats'));

const Last5Stats = props => (
  <Suspense fallback={null}>
    <LazyLast5Stats {...props} />
  </Suspense>
);

export default Last5Stats;
