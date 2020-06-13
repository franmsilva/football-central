import React, { lazy, Suspense } from 'react';

const LazyMidTable = lazy(() => import('./MidTable'));

const MidTable = props => (
  <Suspense fallback={null}>
    <LazyMidTable {...props} />
  </Suspense>
);

export default MidTable;
