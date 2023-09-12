import { useEffect, useState, useCallback, useMemo } from 'react'
import ArticleService from '../../services/ArticleService';
import { ArticleType } from '../../types/entities';
import { PaginationType } from '../../services/api_client/types';

interface FetcherProps {
  articles: ArticleType[],
  pagination: PaginationType,
  fetchNextPage: () => void
}

const useFetchArticles = () => {
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [pagination, setPagination] = useState<PaginationType | null>()

  const service = useMemo(() => {
    return new ArticleService({});
  }, [])

  const fetchPage = useCallback(async(page: number = 1) => {
    const response = await service.index({ page });
    setArticles((articles) => {
      return page === 1 ? response.data : [...articles, ...response.data]
    });
    setPagination(response.meta);
  }, [service]);

  const fetchNextPage = useCallback(() => {
    if(!pagination || pagination.currentPage >= pagination.lastPage ) return;

    fetchPage(pagination.currentPage + 1);
  }, [pagination, fetchPage])

  useEffect(() => {
    fetchPage()
  }, [fetchPage]);

  return {
    articles,
    pagination,
    fetchNextPage
  } as FetcherProps
}

export { useFetchArticles }
