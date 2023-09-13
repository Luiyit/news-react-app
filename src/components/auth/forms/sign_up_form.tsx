import { InputController, CheckboxController } from '../../form';
import { Button } from 'antd';
import HookForm, { FormError } from '../../form/hook_form';
import { useState } from 'react';
import { Flex, Grid } from '../../styled/blocks';
import AuthService from '../../../services/AuthService'
import { useNotifier } from '../../../providers/notifier';

export interface Inputs{
  name: string
  email: string
  password: string
  passwordConfirmation?: string
}

export interface CredentialResponseType{
  error: string
  status: number
  ok: boolean
  url?: string | null
}

interface Props {
  onSuccess?: (payload: Inputs) => void
  onError?: (payload: Inputs, error: unknown) => void
  showPasswordConfirmation?: boolean
}

const SignUpForm = ({ onSuccess, onError, showPasswordConfirmation = true }: Props) => {
  
  const [saving, setSaving] = useState<boolean>(false)
  const [error, setError] = useState<FormError>({})
  const { error: showError } = useNotifier();

  const onSubmit = async (payload: Inputs) => {
    setSaving(true)
    setError({})

    if(showPasswordConfirmation){
      const { password, passwordConfirmation } = payload

      if(password !== passwordConfirmation){
        setError({ passwordConfirmation: ["Passwords don't match"] })
        return setSaving(false)
      }
    }
    
    try {
      
      const service = new AuthService({});    
      await service.signUp(payload)
      onSuccess && await onSuccess(payload)

    } catch (reqError: unknown) {

      showError("Error", (reqError as { message : string }).message || "Something was wrong.")
      onError && onError(payload, error)
    }

    setSaving(false)
  };

  return (
    <HookForm<Inputs> {...{ onSubmit, error }}>
      {({ methods: { formState: { isValid } } }) => {
        return (
        <Grid gap="10px" gridTemplateColumns="repeat(1, 1fr)">
                    
          <InputController
            name="name"
            label="Fullname"
            placeholder="Fullname"
            rules={{ required: "Can't be blank" }}
          />
          
          <InputController
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
            rules={{ required: "Can't be blank" }}
          />

          <InputController
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            rules={{ required: "Can't be blank" }}
          />

          {showPasswordConfirmation && (
            <InputController
              name="passwordConfirmation"
              type="password"
              label="Password confirmation"
              placeholder="Password confirmation"
              rules={{ required: "Can't be blank" }}
            />
          )}

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
            Sing up
          </Button>
        </Grid>
      )}}
    </HookForm>
  );
}

export default SignUpForm
