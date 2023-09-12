import { Button, Divider } from 'antd';
import Text from '../styled/texts';
import { Div } from '../styled/blocks';
import SignUpForm, { Inputs as CredentialInputs } from './forms/sign_up_form'

interface Props {
  setSignIn: () => void
  onSuccess?: (payload: CredentialInputs) => void
  onError?: (payload: CredentialInputs, error: unknown) => void
  signInLabel?: string
}

const SignUp = ({ onError, onSuccess, setSignIn, signInLabel }: Props) => {
  
  return (
    <>
      <Div textAlign="center" marginB="20px">
        <Text as="h1">Sign up!</Text>
        <Text>Create an account</Text>
      </Div>

      <SignUpForm onSuccess={onSuccess} onError={onError} />
      
      <Divider />
      <Div textAlign="center">
        <Text>Already have an account</Text>
        <Button type="link" onClick={() => setSignIn()}>{ signInLabel || 'Sign in' }</Button>
      </Div>
    </>
  )
}

export default SignUp
