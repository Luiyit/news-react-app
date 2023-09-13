import { Button } from 'antd'
import { Div } from '../../../components/styled/blocks'
import { PaginationType } from '../../../services/api_client/types'

interface Props {
  fetchNextPage: () => void
  loading: boolean
  pagination: PaginationType
}

const LoadMore = ({ fetchNextPage, loading, pagination }: Props) => {
  if(!pagination) return;
  const hasNextPage = !!pagination && pagination.currentPage < pagination.lastPage;
  
  return (
    <Div align="center" marginT="20px">
      <Button 
        onClick={fetchNextPage} 
        loading={loading} 
        disabled={!hasNextPage}
        type="primary"
        size="large"
        shape="round"
      >
        Load more
      </Button>
    </Div>
  )
}

export default LoadMore
