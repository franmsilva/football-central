import React, { lazy, Suspense } from 'react';

const LazyTodaysAction = lazy(() => import('./TodaysAction'));

const TodaysAction = props => (
  <Suspense fallback={null}>
    <LazyTodaysAction {...props} />
  </Suspense>
);

export default TodaysAction;
