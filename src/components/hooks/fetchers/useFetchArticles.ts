import { useEffect, useState, useCallback, useMemo } from 'react'
import ArticleService from '../../../services/ArticleService';
import { ArticleType } from '../../../types/entities';
import { PaginationType } from '../../../services/api_client/types';
import { IHash } from '../../../types/util';
import useOnChange from '../use_on_change';
import debounce from 'lodash.debounce';
import useOneEffect from '../use_one_effect';

type FilterType = IHash<string | number>

interface FetcherProps {
  loading: boolean,
  articles: ArticleType[],
  pagination: PaginationType,
  fetchNextPage: () => void,
  addFilter: (key: string, value: number | string) => void
  removeFilter: (key: string) => void
}

const useFetchArticles = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [pagination, setPagination] = useState<PaginationType | null>()
  const [filter, setFilters] = useState<FilterType>({})

  const service = useMemo(() => {
    return new ArticleService({});
  }, [])

  const fetchPage = useCallback(async(page: number = 1, currentFilter: FilterType) => {
    
    setLoading(true)

    const response = await service.index({ page, ...currentFilter });
    
    setArticles((articles) => {
      return page === 1 ? response.data : [...articles, ...response.data]
    });
    setPagination(response.meta);

    setLoading(false)
  }, [service]);
  
  const debouncedFetchPage = useMemo(() => {
    return debounce(fetchPage, 300);
  }, [fetchPage]);

  const addFilter = useCallback((key: string, value: number) => {
    setFilters((state) => ({
      ...state,
      [key]: value
    }));
  }, []);
  
  const removeFilter = useCallback((key: string) => {
    setFilters((state) => {
      delete state[key]
      return {...state};
    });
  }, []);

  useOnChange(() => {
    debouncedFetchPage(1, filter) 
  }, [filter], true)

  const fetchNextPage = useCallback(() => {
    
    if(!pagination || pagination.currentPage >= pagination.lastPage ) return;
    fetchPage(pagination.currentPage + 1, filter);

  }, [pagination, fetchPage, filter])

  useOneEffect(() => {
    fetchPage(1, filter)
  }, [fetchPage]);

  return {
    loading,
    articles,
    pagination,
    fetchNextPage,
    filter,
    addFilter,
    removeFilter,
  } as FetcherProps
}

export { useFetchArticles }
