import React, { lazy, Suspense } from 'react';

const LazyTopScorers = lazy(() => import('./TopScorers'));

const TopScorers = props => (
  <Suspense fallback={null}>
    <LazyTopScorers {...props} />
  </Suspense>
);

export default TopScorers;
