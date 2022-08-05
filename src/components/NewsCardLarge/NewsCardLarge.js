import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import Spinner from '../Spinner/Spinner'

import './NewsCardLarge.css'

const NewsCardLarge = ({ article }) => (
  <>
    {article.source ? (
      <div className="card__large">
        <Image className="card__large__img" src={article.urlToImage} alt="" />
        <a href={article.url} rel="noopener noreferrer" target="_blank">
          <div className="card__large__info">
            <span className="card__large__source">{article.source.name.split(' - ')[0]}</span>
            <h3 className="card__large__title">{article.title.split(' - ')[0]}</h3>
            <h4 className="card__large__description">{article.description}</h4>
            <span className="card__large__published">
              published:{' '}
              <span className="card__large__date">
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
