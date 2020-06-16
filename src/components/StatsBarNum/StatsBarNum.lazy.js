import React, { lazy, Suspense } from 'react';

const LazyStatsBarNum = lazy(() => import('./StatsBarNum'));

const StatsBarNum = props => (
  <Suspense fallback={null}>
    <LazyStatsBarNum {...props} />
  </Suspense>
);

export default StatsBarNum;
