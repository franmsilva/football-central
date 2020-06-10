import React, { lazy, Suspense } from 'react';

const LazyFixtureCard = lazy(() => import('./FixtureCard'));

const FixtureCard = props => (
  <Suspense fallback={null}>
    <LazyFixtureCard {...props} />
  </Suspense>
);

export default FixtureCard;
