import React, { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SignUpParamsDto } from '@clean/domain/dto'
import { SignUp } from '@clean/domain/usecases'
import { Form, Input, SecondaryButton, Spinner } from '@clean/presentation/components/common'
import { FormState } from '@clean/presentation/protocols'
import { setAccessToken } from '@clean/presentation/store/access-token-store'
import { validation } from '@clean/presentation/ts/types'
import { optionInputsErrors } from '@clean/presentation/ts/utils'
import { RequiredFieldError } from '@clean/validation/errors'
import { Footer, Heading } from '../components'

type Props = validation & {
  addAccount: SignUp
}

export const Signup: React.FC<Props> = ({ validation, addAccount }) => {
  const router = useRouter()

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isFormInvalid: false,
    formTouched: false,
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
    validate('username')
  }, [form.username])

  useEffect(() => {
    validate('email')
  }, [form.email])

  useEffect(() => {
    validate('password')
  }, [form.password])

  useEffect(() => {
    validate('passwordConfirm')
  }, [form.passwordConfirm])

  const validate = (field: string): void => {
    if (!formState.formTouched) return

    setFormErrors((prev: any) => ({
      ...prev,
      [field]: validation.validate(field, form)
    }))
  }

  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      formTouched: true,
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

        const {
          result: { accessToken }
        } = await addAccount.signup({
          email,
          password,
          passwordConfirm,
          username
        })

        setAccessToken(accessToken)

        router.replace('/account/student-enquirement')
      } else {
        setFormErrors(prev => ({
          ...prev,
          ...formField
        }))
      }
    } catch (error: any) {
      debugger
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
        {formState.mainError && (
          <span data-testid="main-error" className="error-message center">
            {formState.mainError}
          </span>
        )}
        {formState.isLoading ? (
          <Spinner type="spinner-replace" />
        ) : (
          <SecondaryButton dataTestId="submit" type="submit" additionalStyles="button-submit" value="Regístrate" />
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
