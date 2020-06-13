import React, { lazy, Suspense } from 'react';

const LazyAttTable = lazy(() => import('./AttTable'));

const AttTable = props => (
  <Suspense fallback={null}>
    <LazyAttTable {...props} />
  </Suspense>
);

export default AttTable;
