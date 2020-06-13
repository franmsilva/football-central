import React, { lazy, Suspense } from 'react';

const LazySquad = lazy(() => import('./Squad'));

const Squad = props => (
  <Suspense fallback={null}>
    <LazySquad {...props} />
  </Suspense>
);

export default Squad;
