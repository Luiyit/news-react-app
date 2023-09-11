import { useCallback } from 'react'
import AuthService from '../../services/AuthService'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from "react-router-dom";

function LoginPage(){
  const signIn = useSignIn()
  const navigate = useNavigate();

  const login = useCallback(async () => {
    const service = new AuthService({});
    const authState = { email: "luiyit@gmail.com", password: '1234'}
    
    const authToken = await service.login(authState)
    
    const isSignedIn = signIn({
      token: authToken.accessToken,
      expiresIn: authToken.expiresIn,
      tokenType: authToken.tokenType,
      authState,
    })

    if(isSignedIn){
      console.log('SUCCESS')
      return navigate('/settings')
    }
    
    console.log('ERROR')
    
    
  }, [signIn, navigate])

  return (
    <>
      Login Page
      <button onClick={login}>Login</button>
    </>
  )
}

export default LoginPage
