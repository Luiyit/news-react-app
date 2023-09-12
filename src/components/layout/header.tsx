import { Layout } from 'antd';
const { Header: AntHeader } = Layout;
import { Div } from '../styled/blocks';
import { displayTypes, alignTypes } from '../styled/interfaces';
import SessionAvatar from '../session/session_avatar'
import SignInUp from '../session/sign_in_up';
import Container from '../styled/container'
import { NavLink } from "react-router-dom";


interface HeaderProps{
  logo: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {

  const dynamicStyle = {
    height: '70px'
  }

  return (
    <AntHeader className={`ant-layout-header-light'}`} style={dynamicStyle}>
      <Container className="header-container">

        <Div display={displayTypes.flex} align={alignTypes.center} justify='space-between' height={'70px'}>
          <Div className="header-left">
            
            <Div className='header-logo-container' textAlign='center' minWidth="80px" padding='0 15px'>
              <NavLink className='logo-link' to='/' style={{display: "inline-block", fontSize: 0}}>
                { logo && <img src={ logo } alt="New aggregator" /> }
              </NavLink>
            </Div>
          </Div>

          {/* <Menu items={menuItems} theme={menuTheme} /> */}

          <Div className="header-right">
            <SessionAvatar/>
            <SignInUp 
              buttonProps={{ 
                size: "small",
                shape: 'round',
                style: {height: "35px", width: "120px"}
              }}
            />
          </Div>
        </Div>
        
      </Container>
    </AntHeader>
  )
}

export default Header
