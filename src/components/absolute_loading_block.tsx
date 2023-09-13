import styled from 'styled-components';
import { LoadingOutlined  } from '@ant-design/icons';

const AbsBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 100px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(255,255,255,0.5);
`
const AbsoluteLoadingBlock = ({ loading }) => {
  if(!loading) return;

  return (
    <AbsBlock>
      <LoadingOutlined />
    </AbsBlock>
  )
}

export default AbsoluteLoadingBlock
