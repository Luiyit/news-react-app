import React from 'react'
import { Navigate } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit'

interface Props {
  Component: React.ComponentType,
  loginPath?: string,
}

const RequiredAuth: React.FC<Props> = ({ Component, loginPath = "/login" }) => {
  const isAuthenticated = useIsAuthenticated(); 
  const auth = isAuthenticated();
  return auth ? <Component /> : <Navigate to={ loginPath } />;
}

export default RequiredAuth
