import React from 'react'
import BaseText from './texts'
import styled from 'styled-components'
import { breakpoints as bp } from '../../types/util.d';
import { TextI } from './interfaces';

export interface ResponsiveTextI extends TextI {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

const Text = styled(BaseText).attrs((props: ResponsiveTextI) => props)<ResponsiveTextI>`
  font-size: ${({ xs }) => xs};

  @media (min-width: ${bp.xs}) {
    ${({ xs }) => xs && `font-size: ${xs};`}
  }
  
  @media (min-width: ${bp.sm}) {
    ${({ sm }) => sm && `font-size: ${sm};`}
  }
  
  @media (min-width: ${bp.md}) {
    ${({ md }) => md && `font-size: ${md};`}
  }
  
  @media (min-width: ${bp.lg}) {
    ${({ lg }) => lg && `font-size: ${lg};`}
  }
  
  @media (min-width: ${bp.xl}) {
    ${({ xl }) => xl && `font-size: ${xl};`}
  }
  
  @media (min-width: ${bp.xxl}) {
    ${({ xxl }) => xxl && `font-size: ${xxl};`}
  }
`
interface Props extends ResponsiveTextI {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const ResponsiveText: React.FC<Props> = ({ children, ...rest}) => {
  return (
    <Text {...rest}>
      { children }
    </Text>
  )
}


export default ResponsiveText
