import React, { lazy, Suspense } from 'react';

const LazyFixtureStats = lazy(() => import('./FixtureStats'));

const FixtureStats = props => (
  <Suspense fallback={null}>
    <LazyFixtureStats {...props} />
  </Suspense>
);

export default FixtureStats;
