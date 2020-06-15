import React, { lazy, Suspense } from 'react';

const LazyFixtureCountdown = lazy(() => import('./FixtureCountdown'));

const FixtureCountdown = props => (
  <Suspense fallback={null}>
    <LazyFixtureCountdown {...props} />
  </Suspense>
);

export default FixtureCountdown;
