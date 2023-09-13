import { useEffect, useState, useCallback } from 'react'
import CategoryService from '../../../services/CategoryService';
import { CategoryType } from '../../../types/entities';

interface FetcherProps {
  categories: CategoryType[],
  loading: boolean
}

const useFetchCategories = () => {
  const [categories, setCategory] = useState<CategoryType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  const fetchPage = useCallback(async() => {
    const service = new CategoryService({})
    const response = await service.index();
    setCategory(response.data);
    setLoading(false);
  }, []);

  useEffect(() => { fetchPage() }, [fetchPage]);

  return {
    categories,
    loading
  } as FetcherProps
}

export { useFetchCategories }
