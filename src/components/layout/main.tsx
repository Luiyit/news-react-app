import React from 'react';
import { Layout } from 'antd';
import Header from './header'
import Footer from './footer'
import Content from './content'
import MainLayoutStyle from './style/main_style'
import GlobalLayoutStyle from './style/global_style'
import logo from '../../assets/react.svg'

console.log(logo)

interface MainLayoutProps{
  hideHeader?: boolean
  hideFooter?: boolean
  children?: React.ReactNode | React.ReactNode[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    
  return (
    <React.Fragment>
      {/* <Head /> */}
      <GlobalLayoutStyle />
      <MainLayoutStyle/>
      <Layout className={`ant-full-content-template fixed-header`}>
        <Header 
          // menuItems={[]} 
          // profileMenuItems={[]}
          logo={logo}
          // favIcon={favIcon}
          // config={header}
        />
        <Content 
          // headerHidden={hideHeader} 
          // footerHidden={hideFooter} 
          // headerHeight={header.height}
          // footerHeight={footerBar.height}
          // useFooter={footerBar.enabled}
          // disableDarkMode={config.mainLayout.disableDarkMode}
        >
          { children }
        </Content>
        <Footer/>
      </Layout>
    </React.Fragment>

  )
}

export default MainLayout;