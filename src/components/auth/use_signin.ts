import { useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from '../hooks/use_current_user';
import { useNotifier } from '../../providers/notifier';

const useSignin = (prams: { redirectTo?: string } = {}) => {
  const { redirectTo } = prams
  const { currentUser } = useCurrentUser()
  const { error: showError, info } = useNotifier()

  const navigate = useNavigate();
    
  const onError = useCallback(async (response: unknown | undefined) => {
    showError((response as { error: string })?.error || "Error", "Something went wrong, please try again")
  }, [showError])

  const onSuccess = useCallback(async (response: unknown | undefined, redirect: boolean = true) => {
    info("Welcome back", "You have successfully signed in")
    if(redirect) navigate(redirectTo || (response as { url: string })?.url || "/")
  }, [redirectTo, navigate, info])

  const alreadySignedIn = useCallback(async (redirect: boolean = true) => {
    info("Logged in", "You already have an active session")
    if(redirect) navigate(redirectTo || "/")
  }, [redirectTo, navigate, info])

  return {
    currentUser,
    onError,
    onSuccess,
    alreadySignedIn
  }

}

export default useSignin
