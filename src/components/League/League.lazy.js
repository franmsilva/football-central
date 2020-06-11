import React, { lazy, Suspense } from 'react';

const LazyLeague = lazy(() => import('./League'));

const League = props => (
  <Suspense fallback={null}>
    <LazyLeague {...props} />
  </Suspense>
);

export default League;
