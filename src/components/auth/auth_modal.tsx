import { useEffect, useState } from 'react'
import providers from './providers';
import useSignin from './use_signin';
import ModalTrigger, { CallbackProps } from '../antd/modal/trigger'
import { Button, ButtonProps } from 'antd';
import SignIn from './sign_in_wrapper'
import SignUp from './sign_up_wrapper'
import AuthService from '../../services/AuthService'
import { useSignIn } from 'react-auth-kit'
import type { Inputs as SignupInputs } from './forms/sign_up_form'

export interface SignInUpModalProps {
  modalProps: CallbackProps
  startMode?: "signin" | "signup"
  buttonProps?: ButtonProps
}

function Handler({ modalProps, startMode='signin' }: SignInUpModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(startMode)
  const { currentUser, onError, onSuccess, alreadySignedIn } = useSignin({ redirectTo: "/" })

  const signIn = useSignIn()

  useEffect(() => {
    if (currentUser){ 
      alreadySignedIn(false)
      modalProps.setOpen(false)
    }
  }, [modalProps, alreadySignedIn, currentUser])

  async function onSignInSuccess(response: unknown) {
    onSuccess(response, false)
    modalProps.setOpen(false)
  }

  async function onSignupSuccess(payload: SignupInputs) {
    
    const service = new AuthService({});    
    const authToken = await service.login(payload)
    
    const isSignedIn = signIn({
      token: authToken.accessToken,
      expiresIn: authToken.expiresIn,
      tokenType: authToken.tokenType,
      authState: payload,
    })

    if(isSignedIn){
      onSuccess && onSuccess(payload, false)
      modalProps.setOpen(false)
    }
    else onError && onError(null)

  }
  
  if(!providers) return null
  
  return (
    <>
      {mode === "signin" && (
        <SignIn 
          providers={providers}
          onError={onError}
          onSuccess={onSignInSuccess}
          setSignUp={() => setMode("signup")}
          allowSignup
        />
      )}

      {mode === "signup" && (
        <SignUp 
          onError={onError}
          onSuccess={onSignupSuccess}
          setSignIn={() => setMode("signin")}
        />
      )}
    </>
  )
}

const SignInUpModal = ({ buttonProps, startMode='signin', ...rest }: Omit<SignInUpModalProps, "modalProps">) => {
    
  const render = (cbProps: CallbackProps) => {
    return (
      <Button onClick={() => cbProps.setOpen(true)} {...buttonProps}>
        { startMode === 'signin' ? "SignIn": "SignUp" }
      </Button>
    )
  }

  const handleCancel = ({ setOpen }: CallbackProps) => {
    setOpen(false);
  }

  const handleOk = ({ setConfirmLoading }: CallbackProps) => {
    setConfirmLoading(true);
  }

  return (
    <ModalTrigger 
      render={render} 
      handleCancel={handleCancel} 
      handleOk={handleOk} 
      width="500px" 
      footer={null}
    >
      {(modalProps) => (
        <Handler modalProps={modalProps} {...rest} />
      )}
    </ModalTrigger>
  )
}

export default SignInUpModal
