import React, { lazy, Suspense } from 'react';

const LazyLeagueFixtures = lazy(() => import('./LeagueFixtures'));

const LeagueFixtures = props => (
  <Suspense fallback={null}>
    <LazyLeagueFixtures {...props} />
  </Suspense>
);

export default LeagueFixtures;
