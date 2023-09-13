import { createGlobalStyle  } from 'styled-components';

const globalLayoutStyle = createGlobalStyle`
  .ant-layout{
    background-color: white;
    
    .ant-layout-header {
      background: white;
      line-height: initial;
      padding-inline: 0;
      width: 100%;

      .ant-menu{
        background: transparent;
        border-bottom: none;
      }
    }
  }
`

export default globalLayoutStyle;