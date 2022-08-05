import React from 'react'
import styles from './FixtureList.module.css'

import FixtureCard from '../FixtureCard/FixtureCard'

const FixtureList = ({ fixtures }) => (
  <div className={styles.FixtureList}>
    {fixtures.length
      ? fixtures.map((fixture) => {
          return <FixtureCard key={fixture.fixture_id} fixture={fixture} />
        })
      : null}
  </div>
)

export default FixtureList
