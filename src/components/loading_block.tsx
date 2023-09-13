import { LoadingOutlined  } from '@ant-design/icons';
import { Div } from './styled/blocks';
import Text from './styled/texts';

const LoadingBlock = ({ loading }) => {
  if(!loading) return;

  return (
    <Div align="center" fontSize="15px" padding="30px 0" backgroundColor='#f8f8f8' margin="20px 0">
      <LoadingOutlined  />
      <Text>Loading</Text>
    </Div>
  )
}

export default LoadingBlock
