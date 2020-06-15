import React, { lazy, Suspense } from 'react';

const LazyFixtureBody = lazy(() => import('./FixtureBody'));

const FixtureBody = props => (
  <Suspense fallback={null}>
    <LazyFixtureBody {...props} />
  </Suspense>
);

export default FixtureBody;
