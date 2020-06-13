import React, { lazy, Suspense } from 'react';

const LazyLineUps = lazy(() => import('./LineUps'));

const LineUps = props => (
  <Suspense fallback={null}>
    <LazyLineUps {...props} />
  </Suspense>
);

export default LineUps;
