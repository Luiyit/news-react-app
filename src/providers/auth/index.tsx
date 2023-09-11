import { FC } from 'react'
import { AuthProvider as ReactAuthProvider } from 'react-auth-kit'
import { LOCAL_STORAGE_TOKEN_KEY } from './utils'

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const AuthProvider: FC<Props> = ({ children }) => {
  return (
    <ReactAuthProvider 
      authType = {'localstorage'}
      authName={LOCAL_STORAGE_TOKEN_KEY}
    >
      { children }
    </ReactAuthProvider>
  )
}

export default AuthProvider


