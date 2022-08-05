import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import Spinner from '../Spinner/Spinner'

import styles from './NewsCardLarge.module.css'

const NewsCardLarge = ({ article }) => (
  <>
    {article.source ? (
      <div className={styles.card__large}>
        <Image className={styles.card__large__img} src={article.urlToImage} alt="" />
        <a href={article.url} rel="noopener noreferrer" target="_blank">
          <div className={styles.card__large__info}>
            <span className={styles.card__large__source}>
              {article.source.name.split(' - ')[0]}
            </span>
            <h3 className={styles.card__large__title}>{article.title.split(' - ')[0]}</h3>
            <h4 className={styles.card__large__description}>{article.description}</h4>
            <span className={styles.card__large__published}>
              published:{' '}
              <span className={styles.card__large__date}>
                {moment(article.publishedAt).format('DD.MM.YYYY')}
              </span>
            </span>
          </div>
        </a>
      </div>
    ) : (
      <Spinner />
    )}
  </>
)

export default NewsCardLarge
