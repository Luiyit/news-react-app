import React from 'react'
import { Div } from './blocks';
import { DivI } from './interfaces';

interface ContainerProps extends DivI {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  return (
    <Div className={`container ${className || ''}`} {...rest as DivI}>
      { children }
    </Div>
  )
}
export default Container

const SiderContainer: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  
  const styleProps: DivI = {
    padding: '25px',
    maxHeight: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    ...rest
  };

  return (
    <Div className={`sider-container ${className || ''}`} {...styleProps}>
      { children }
    </Div>
  )
}

export { Container, SiderContainer }
