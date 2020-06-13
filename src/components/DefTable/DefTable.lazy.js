import React, { lazy, Suspense } from 'react';

const LazyDefTable = lazy(() => import('./DefTable'));

const DefTable = props => (
  <Suspense fallback={null}>
    <LazyDefTable {...props} />
  </Suspense>
);

export default DefTable;
