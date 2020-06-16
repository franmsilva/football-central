import React, { lazy, Suspense } from 'react';

const LazyStatsH2H = lazy(() => import('./StatsH2H'));

const StatsH2H = props => (
  <Suspense fallback={null}>
    <LazyStatsH2H {...props} />
  </Suspense>
);

export default StatsH2H;
