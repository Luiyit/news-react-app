import AuthCredentialsForm from './forms/credentials';
import { AuthProvidersType } from './providers';
import { Button, Divider } from 'antd';
import Text from '../styled/texts';
import { Div } from '../styled/blocks';
import { StateFnCallback } from './types';

interface Props {
  providers: AuthProvidersType
  onError?: StateFnCallback
  onSuccess?: StateFnCallback
  setSignUp?: () => void
  allowSignup?: boolean
  signUpLabel?: string
}

const SignIn = ({ providers, onError, onSuccess, setSignUp, allowSignup, signUpLabel }: Props) => {
  const { credentials } = providers

  return (
    <>
      <Div textAlign="center" marginB="20px">
        <Text as="h1">Welcome!</Text>
        <Text>Sign in to your account</Text>
      </Div>
      
      <AuthCredentialsForm 
        provider={credentials} 
        onError={onError} 
        onSuccess={onSuccess}
      />

      {allowSignup && setSignUp && (
        <>
          <Divider />
          <Div textAlign="center">
            <Text>Don&apos;t have an account?</Text>
            <Button type="link" onClick={() => setSignUp()}>{ signUpLabel || 'Sign up' }</Button>
          </Div>
        </>
      )}
    </>
  )
}

export default SignIn
