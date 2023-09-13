import { useEffect, useState, useCallback } from 'react'
import SourceService from '../../../services/SourceService';
import { SourceType } from '../../../types/entities';

interface FetcherProps {
  sources: SourceType[],
  loading: boolean
}

const useFetchSources = () => {
  const [sources, setSources] = useState<SourceType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  const fetchPage = useCallback(async() => {
    const service = new SourceService({})
    const response = await service.index();
    setSources(response.data);
    setLoading(false)
  }, []);

  useEffect(() => { fetchPage() }, [fetchPage]);

  return {
    sources,
    loading
  } as FetcherProps
}

export { useFetchSources }
