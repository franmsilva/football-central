import React, { lazy, Suspense } from 'react';

const LazyFixtureHeader = lazy(() => import('./FixtureHeader'));

const FixtureHeader = props => (
  <Suspense fallback={null}>
    <LazyFixtureHeader {...props} />
  </Suspense>
);

export default FixtureHeader;
