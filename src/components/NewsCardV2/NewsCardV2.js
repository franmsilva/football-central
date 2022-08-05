import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import styles from './NewsCardV2.module.css'

const NewsCardV2 = ({ article }) => (
  <div className={styles.card}>
    <Image className={styles.card__img} src={article.urlToImage} alt="" />
    <a href={article.url} rel="noopener noreferrer" target="_blank">
      <div className={styles.card__info}>
        <span className={styles.card__source}>{article.source.name.split(' - ')[0]}</span>
        <h3 className={styles.card__title}>{article.title.split(' - ')[0]}</h3>
        <span className={styles.card__published}>
          published:{' '}
          <span className={styles.card__date}>
            {moment(article.publishedAt).format('DD.MM.YYYY')}
          </span>
        </span>
      </div>
    </a>
  </div>
)

export default NewsCardV2
