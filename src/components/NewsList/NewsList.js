import React from 'react';

import NewsCardV2 from '../NewsCardV2/NewsCardV2';
import NewsCardLarge from '../NewsCardLarge/NewsCardLarge';
import { APOSTROPHE } from '../../constants/symbols';

import styles from './NewsList.module.css';

const NewsList = ({ news }) => (
  <div className={styles.newsList}>
    {news.length ? <NewsCardLarge article={news[0]} /> : null}
    <div className={styles.small__cards__container}>
      {news.slice(1).map((article) => {
        return <NewsCardV2 article={article} key={article.id} />;
      })}
    </div>
    {!news.length ? (
      <div className={styles.backup}>
        You{APOSTROPHE}re all caught up{' '}
        <span role="img" aria-label="">
          🤓
        </span>
      </div>
    ) : null}
  </div>
);

export default NewsList;
