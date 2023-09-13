import { useCallback } from 'react'
import { InputController, CheckboxController } from '../../form';
import { Button } from 'antd';
import HookForm from '../../form/hook_form';
import { useState } from 'react';
import { Provider } from '../providers';
import AuthService from '../../../services/AuthService'
import { useSignIn } from 'react-auth-kit'
import { Flex, Grid } from '../../styled/blocks';

export interface Inputs {
  password: string
  passwordConfirmation: string
  email: string
}

interface Props {
  provider: Provider
  onSuccess?: () => void
  onError?: () => void
  signup?: boolean
}

type ErrorType = { [key in string]: string[] }

/**
 * DEV NOTE:
 * Now this form only support input fields for credentials
 * that are defined in the next-auth config file
 */
const AuthCredentialsForm = ({ onSuccess, onError, provider, signup }: Props) => {
  
  const [saving, setSaving] = useState<boolean>(false)
  const [error, setError] = useState<ErrorType>({})
  const signIn = useSignIn()

  const onSubmit = useCallback(async (payload: Inputs) => {
    setSaving(true)
    setError({})

    const service = new AuthService({});    
    const authToken = await service.login(payload)
        
    const isSignedIn = signIn({
      token: authToken.accessToken,
      expiresIn: authToken.expiresIn,
      tokenType: authToken.tokenType,
      authState: payload,
    })

    if(isSignedIn) onSuccess && onSuccess()
    else onError && onError()

    setSaving(false)    
    
  }, [onSuccess, onError, signIn])

  return (
    <HookForm<Inputs> {...{ onSubmit, error }}>
      {({ methods }) => {
        const { formState: { isValid }} = methods

        return (
        <Grid gap="10px" gridTemplateColumns="repeat(1, 1fr)">
          {Object.keys(provider).map((key, index) => {
            const { type, label, placeholder, rules } = provider[key]
            return (
              <InputController
                key={index}
                name={key}
                type={type}
                label={label}
                placeholder={placeholder}
                rules={rules}
              />
            )
          })}

          <Flex justify="space-between" align="center">
            <CheckboxController
              name="remember"
              label="Keep me logged in"
            />
          </Flex>
          
          <Button
            htmlType="submit"
            type="primary"
            style={{marginTop: '12px'}}
            loading={saving}
            disabled={!isValid || saving}
            size='large'
            block
          >
            {signup ? "Sing up" : "Sign in"}
          </Button>
        </Grid>
      )}}
    </HookForm>
  );
}

export default AuthCredentialsForm
