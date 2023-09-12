import React from 'react'
import { Div as BaseDiv } from './blocks'
import { DivI } from './interfaces';
import useResponsiveWidth, { ResponsiveWidthProps } from '../hooks/use_responsive_width'

interface Props extends ResponsiveWidthProps, DivI {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  centerBlock?: boolean
}

const ResponsiveDiv: React.FC<Props> = ({ children, ...rest}) => {
  const { xs, sm, md, lg, xl, xxl, defaultValue, mode, centerBlock, ...divProps } = rest
  const { width } = useResponsiveWidth({ xs, sm, md, lg, xl, xxl, defaultValue, mode });

  const style = {
    width,
    ...(centerBlock ? { margin: '0 auto' } : {})
  }
  return (
    <BaseDiv {...divProps} {...style}>
      { children }
    </BaseDiv>
  )
}


export default ResponsiveDiv
