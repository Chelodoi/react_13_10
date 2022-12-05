import React, { FC, useEffect, useState } from 'react'
import { api } from 'src/COSTANTS'

interface Article {
  id: string
  title: string
}

export const Articles: FC = () => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    setLoading(true)
    fetch(api)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      <h2>Articles</h2>
      {loading && <div>Loading...</div>}
    </>
  )
}
