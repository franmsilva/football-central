import React, { lazy, Suspense } from 'react';

const LazyFixture = lazy(() => import('./Fixture'));

const Fixture = props => (
  <Suspense fallback={null}>
    <LazyFixture {...props} />
  </Suspense>
);

export default Fixture;
