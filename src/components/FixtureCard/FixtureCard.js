import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

import styles from './FixtureCard.module.css';
import { APOSTROPHE } from '../../constants/symbols';

const FixtureCard = ({ fixture }) => {
  const displayFixtureStatus = () => {
    switch (fixture.status) {
      case 'Not Started':
        return (
          <>
            <p>{moment(fixture.event_date).format('DD.MM.yyyy')}</p>
            <p>{moment(fixture.event_date).format('HH:mm')}</p>
          </>
        );
      case 'Halftime':
        return (
          <>
            <div className={[styles.fixture__card__status, styles.halftime]}>Halftime</div>
            <div className="elapsedtime">
              {fixture.elapsed}
              {APOSTROPHE}
            </div>
          </>
        );
      case 'Match Finished':
        return (
          <>
            <div className={[styles.fixture__card__status, styles.fulltime]}>Fulltime</div>
            <div className="elapsedtime">
              {fixture.elapsed}
              {APOSTROPHE}
            </div>
          </>
        );
      default:
        return (
          <>
            <div className={[styles.fixture__card__status, styles.live]}>Live</div>
            <div className="elapsedtime">
              {fixture.elapsed}
              {APOSTROPHE}
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.card}>
      <Link to={`/league/${fixture.league_id}/${fixture.league.name}`}>
        <div className={styles.card__header}>
          <div className={styles.card__header__left}>
            <Image alt="" src={fixture.league.logo} width={25} />
            <h3>{fixture.league.name}</h3>
          </div>
          <p>Matchday {fixture.round.split(' - ')[1]}</p>
        </div>
      </Link>
      <Link to={`/fixture/${fixture.fixture_id}`}>
        <div className={styles.card__body}>
          <div className={styles.card__body__teams}>
            <div className={styles.team}>
              <div className={styles.team__info}>
                <Image alt="" src={fixture.homeTeam.logo} width={30} />
                <p>{fixture.homeTeam.team_name}</p>
              </div>
              <p>{fixture.goalsHomeTeam}</p>
            </div>
            <div className={styles.team}>
              <div className={styles.team__info}>
                <Image alt="" src={fixture.awayTeam.logo} width={30} />
                <p>{fixture.awayTeam.team_name}</p>
              </div>
              <p>{fixture.goalsAwayTeam}</p>
            </div>
          </div>
          <div className={styles.separator} />
          <div className={styles.card__body__time}>{displayFixtureStatus()}</div>
        </div>
      </Link>
    </div>
  );
};

export default FixtureCard;
