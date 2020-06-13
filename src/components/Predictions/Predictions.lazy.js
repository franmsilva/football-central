import React, { lazy, Suspense } from 'react';

const LazyPredictions = lazy(() => import('./Predictions'));

const Predictions = props => (
  <Suspense fallback={null}>
    <LazyPredictions {...props} />
  </Suspense>
);

export default Predictions;
