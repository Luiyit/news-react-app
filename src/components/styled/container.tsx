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
