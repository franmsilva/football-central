import React, { lazy, Suspense } from 'react';

const LazyStatsBar = lazy(() => import('./StatsBar'));

const StatsBar = props => (
  <Suspense fallback={null}>
    <LazyStatsBar {...props} />
  </Suspense>
);

export default StatsBar;
