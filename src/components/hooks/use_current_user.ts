import { UserType } from '../../types/entities';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';


interface CurrentUserReturn {
  isAuthenticated: boolean;
  currentUser: UserType
}

const useCurrentUser = () => {
  const authenticated = useIsAuthenticated(); 
  const isAuthenticated = authenticated();
  const authUser = useAuthUser()

  let currentUser = null;
  if(isAuthenticated){
    currentUser = authUser ? authUser() : null;
  }

  return {
    isAuthenticated,
    currentUser
  } as CurrentUserReturn
}

export { useCurrentUser }
