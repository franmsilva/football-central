import React, { lazy, Suspense } from 'react';

const LazyFixtureList = lazy(() => import('./FixtureList'));

const FixtureList = props => (
  <Suspense fallback={null}>
    <LazyFixtureList {...props} />
  </Suspense>
);

export default FixtureList;
