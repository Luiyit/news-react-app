import React from 'react';
import { Layout } from 'antd';
const { Content: AntContent } = Layout;


interface ContentProps{
  children?: React.ReactNode | React.ReactNode[];
  // className?: string;
  // headerHidden?: boolean
  // footerHidden?: boolean
  // headerHeight: number
  // footerHeight: number
  // useFooter: boolean
  // disableDarkMode?: boolean
}

const Content: React.FC<ContentProps> = ({ children }) => {
  const dark = false;

  return (
    <React.Fragment>
      <AntContent className={`ant-layout-content-${dark ? 'dark':'light'}`} >
        { children }
      </AntContent>
    </React.Fragment>
  )
}

export default Content
