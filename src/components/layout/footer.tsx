import React from 'react';
import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;
import Container from '../styled/container'
import FooterBar from './footer_bar';

interface FooterProps{
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  useContainer?: boolean;
}

const Footer: React.FC<FooterProps> = ({ children, className }) => {

  return (
    <React.Fragment>
      <AntFooter className={className}>
        <Container height="100%" padding="0 15px">
          { children }
          <FooterBar height="auto"/>
        </Container>          
      </AntFooter>
    </React.Fragment>
  )
}

export default Footer
