import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;
// import Menu from '@base_comps/menu'
import { Div } from '../styled/blocks';
import { displayTypes, alignTypes } from '../styled/interfaces';
// import type { MenuProps as AntMenuProps } from 'antd';
// import Avatar from '@core/components/base/session/session_avatar'
// import SignInUp from '@base_comps/session/sign_in_up';
// import { MenuType } from '@core/types/menu';
import Container from '../styled/container'
// import { useTheme } from '@core/providers/theme';
import hexToRgba from 'hex-to-rgba';
// import { HeaderConfigI } from '@root/core/types/global_config';
// import { useCoreConfig } from '@core/providers/config'

interface HeaderProps{
  // menuItems?: MenuType[],
  // profileMenuItems?: MenuType[],
  // menuTheme?: AntMenuProps['theme'],
  // logo: React.ReactNode
  // favIcon: React.ReactNode
  config?: any
}

// TODO: FIXME
const Header: React.FC<HeaderProps> = ({ config = { heightInPx: '70px'} }) => {
  
  const baseOpacity = config.fixed?.baseOpacity || 1;
  const [opacity, setOpacity] = useState<number>(baseOpacity)
  const opacityRef = React.useRef(opacity);

  const listenScrollEvent = () => {

    if(!config.fixed) return;
    /**
     * DEV NOTE:
     * Normalize scroll position to a value between baseOpacity and opacityOnScroll
     * maxScrollY = 300
     * value = (scrollY / maxScrollY) * (opacityOnScroll - baseOpacity) + baseOpacity
     */
    const scrollOpacity = Math.min((window.scrollY / 300), 1) * (config.fixed.opacityOnScroll - config.fixed.baseOpacity) + config.fixed.baseOpacity;

    // DEV NOTE: Reduce extra renders updating opacity when it reaches the max value
    if(!config.fixed.bgColor || (scrollOpacity >= config.fixed.opacityOnScroll && opacityRef.current >= config.fixed.opacityOnScroll)) return;

    setOpacity(scrollOpacity)
    opacityRef.current = scrollOpacity;
  }
  
  useEffect(() => { 
    if (!config.fixed) return;

    window.addEventListener('scroll', listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dynamicStyle = {
    ...(config.fixed ? { backgroundColor: hexToRgba(config.fixed.bgColor, opacity) } : {}),
    height: config.heightInPx,
  }

  const darkTheme = false;

  return (
    <AntHeader className={`ant-layout-header-${darkTheme ? 'dark': 'light'}`} style={dynamicStyle}>
      <Container className="header-container">

        {/* align={alignTypes.center} */}
        <Div display={displayTypes.flex} height={config.heightInPx}>
          <Div className="header-left">
            {config.showLogo && (
              <Div className='header-logo-container' textAlign='center' minWidth="80px" padding='0 15px'>
                {/* <Link className='logo-link' href='/' style={{display: "inline-block", fontSize: 0}}> */}
                  {/* { logo } */}
                  {/* { favIcon } */}
                  LOGO
                {/* </Link> */}
              </Div>
            )}
          </Div>

          {/* <Menu items={menuItems} theme={menuTheme} /> */}

          <Div className="header-right">
            {/* <Avatar menuItems={profileMenuItems} />
            <SignInUp 
              buttonProps={{ 
                size: "small",
                shape: 'round',
                style: {height: "35px", width: "120px"}
              }}
            /> */}
          </Div>
        </Div>
        
      </Container>
    </AntHeader>
  )
}

export default Header
