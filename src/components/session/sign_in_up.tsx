import SignInUpModal, { SignInUpModalProps } from '../auth/auth_modal';
import { useAuthUser } from 'react-auth-kit';
import { useCurrentUser } from '../hooks/use_current_user';

interface Props extends Omit<SignInUpModalProps, "modalProps"> {
}

const SignInUp = ({...rest }: Props) => {
  const { isAuthenticated, currentUser } = useCurrentUser()

  if(isAuthenticated && currentUser) return null;
  return (
    <SignInUpModal {...rest} />
  )
}

export default SignInUp
