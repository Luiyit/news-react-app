import { useEffect, useState, useCallback, useMemo } from 'react'
import ArticleService from '../../services/ArticleService';
import { ArticleType } from '../../types/entities';
import { PaginationType } from '../../services/api_client/types';

function HomePage(){
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [pagination, setPagination] = useState<PaginationType | null>()

  const service = useMemo(() => {
    return new ArticleService({});
  }, [])

  useEffect(() => {
    (async() => {
      const { data, pagination } = await service.index();
      setArticles(data)
      setPagination(pagination)
      console.log(pagination)
    })()
  }, [service]);

  const loadMore = useCallback(async() => {
    if(!pagination) return;

    const response = await service.index({ page: pagination.currentPage + 1});
    setArticles([...articles, ...response.data]);
    setPagination(response.pagination);

  }, [service, articles, pagination])

  return (
    <>
      Home Page
      {pagination && (
        <div>
          { Object.keys(pagination).map((key: string) => {
            if(typeof pagination[key] !== 'object') return (
              <div key={key}>{ key } - { pagination[key] }</div>
            )
          }) }
        </div>
      )}
      
      {articles.map(article => (
        <div key={article.id}>
          <h2>{ article.title }</h2>
        </div>
      ))}

      <button onClick={loadMore}>Load More</button>
    </>
  )
}

export default HomePage
