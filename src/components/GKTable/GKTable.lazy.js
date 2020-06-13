import React, { lazy, Suspense } from 'react';

const LazyGKTable = lazy(() => import('./GKTable'));

const GKTable = props => (
  <Suspense fallback={null}>
    <LazyGKTable {...props} />
  </Suspense>
);

export default GKTable;
