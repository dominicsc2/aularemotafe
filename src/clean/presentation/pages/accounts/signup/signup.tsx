import { SignUpParamsDto } from '@clean/domain/dto'
import { SignUp } from '@clean/domain/usecases'
import { Form, Input, SecondaryButton, Spinner } from '@clean/presentation/components/common'
import { FormState } from '@clean/presentation/protocols'
import { validation } from '@clean/presentation/ts/types'
import { optionInputsErrors } from '@clean/presentation/ts/utils'
import { RequiredFieldError } from '@clean/validation/errors'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Footer, Heading } from '../components'

type Props = validation & {
  addAccount: SignUp
}

export const Signup: React.FC<Props> = ({ validation, addAccount }) => {
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isFormInvalid: false,
    mainError: ''
  })

  const [formErrors, setFormErrors] = useState<optionInputsErrors<SignUpParamsDto>>({})

  const [form, setForm] = useState<SignUpParamsDto>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: ''
  })

  useEffect(() => {
    setFormErrors((prev: any) => ({
      ...prev,
      username: validation.validate('username', form)
    }))
  }, [form.username])

  useEffect(() => {
    setFormErrors((prev: any) => ({
      ...prev,
      email: validation.validate('email', form)
    }))
  }, [form.email])

  useEffect(() => {
    setFormErrors((prev: any) => ({
      ...prev,
      password: validation.validate('password', form)
    }))
  }, [form.password])

  useEffect(() => {
    setFormErrors((prev: any) => ({
      ...prev,
      passwordConfirm: validation.validate('passwordConfirm', form)
    }))
  }, [form.passwordConfirm])

  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      isFormInvalid:
        !!formErrors.username || !!formErrors.email || !!formErrors.password || !!formErrors.passwordConfirm
    }))
  }, [formErrors])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    try {
      if (formState.isLoading) return

      const formField: any = {}

      for (const [key, value] of Object.entries(form)) {
        if (value === '') {
          formField[key] = new RequiredFieldError().message
        }
      }

      if (Object.keys(formField).length === 0) {
        if (formState.isFormInvalid) return

        setFormState({
          ...formState,
          isLoading: true
        })

        const { username, email, password, passwordConfirm } = form

        await addAccount.signup({
          email,
          password,
          passwordConfirm,
          username
        })
      } else {
        setFormErrors(prev => ({
          ...prev,
          ...formField
        }))
      }
    } catch (error: any) {
      setFormState({
        ...formState,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <>
      <Heading title="Comencemos" description="Empieza a conectarte con la comunidad de Aula Remota X." />
      <Form submit={handleSubmit} additionalStyles="form-w-sm">
        <p className="highlight link">Register with your social networks</p>
        <Input
          elementType="input"
          elementConfig={{
            type: 'text',
            placeholder: 'Ingresa tu nombre de usuario'
          }}
          additionalStyles="input-align"
          value={form.username}
          error={formErrors.username}
          name="username"
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <Input
          elementType="input"
          elementConfig={{
            type: 'text',
            placeholder: 'Ingresa tu correo electrónico'
          }}
          additionalStyles="input-align"
          value={form.email}
          error={formErrors.email}
          name="email"
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            placeholder: 'Ingresa tu contraseña'
          }}
          additionalStyles="input-align"
          value={form.password}
          error={formErrors.password}
          name="password"
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            placeholder: 'Confirm password'
          }}
          additionalStyles="input-align"
          value={form.passwordConfirm}
          error={formErrors.passwordConfirm}
          name="passwordConfirm"
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        {formState.isLoading ? (
          <Spinner type="spinner-replace" />
        ) : (
          <SecondaryButton dataTestId="submit" type="submit" additionalStyles="button-submit" value="Regístrate" />
        )}
        {formState.mainError && (
          <span data-testid="main-error" className="error-message">
            {formState.mainError}
          </span>
        )}
      </Form>
      <Footer
        value="¿Ya tienes una cuenta?"
        link="Iniciar sesión"
        url="/account/login"
        foot_description={
          <p>
            Al registrarme, estoy de acuerdo con los
            <span className="highlight"> términos de uso</span> y las{' '}
            <span className="highlight">políticas privadas</span> de la escuela.
          </p>
        }
      />
    </>
  )
}

export default Signup
