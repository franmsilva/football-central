import React, { lazy, Suspense } from 'react';

const LazyTeam = lazy(() => import('./Team'));

const Team = props => (
  <Suspense fallback={null}>
    <LazyTeam {...props} />
  </Suspense>
);

export default Team;
