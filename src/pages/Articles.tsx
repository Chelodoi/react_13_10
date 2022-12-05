import React, { FC, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticle } from 'src/store/articles/selector'
import { ArticleState, fetchArticles } from 'src/store/articles/slice'
import { ThunkDispatch } from 'redux-thunk'

export const Articles: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<ArticleState, void, any>>()
  const { error, articles, isLoading } = useSelector(selectArticle)

  useEffect(() => {
    console.log()
    dispatch(fetchArticles())
  }, [])

  return (
    <>
      <h2>Articles</h2>
      {isLoading && <CircularProgress />}
      <button onClick={() => dispatch(fetchArticles())}>reload</button>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
