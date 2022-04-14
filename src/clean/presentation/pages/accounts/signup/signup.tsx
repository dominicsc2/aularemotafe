import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { SectionContainer, Form, Input, Spinner, SecondaryButton } from '@clean/presentation/components/common'
import { Heading, Footer } from '../components'
import { SignUpParamsDto } from '@clean/domain/dto'
import { optionInputsErrors } from '@clean/presentation/ts/utils'
import { FacebookButton, GoogleButton } from '../user-components'

export const Signup: React.FC = () => {
  const router = useRouter()
  const [formState, setFormState] = useState({
    isLoading: false,
    isFormInvalid: true,
    mainError: ''
  })
  const [formErrors, setFormErrors] = useState<optionInputsErrors<SignUpParamsDto>>({})
  const [form, setForm] = useState<SignUpParamsDto>({
    email: '',
    password: '',
    passwordConfirm: '',
    username: ''
  })

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })

    
  }

  return (
    <>
      <Heading title="Comencemos" description="Empieza a conectarte con la comunidad de Aula Remota X." />
      <Form submit={() => {}} additionalStyles="form-w-sm">
        <p className='highlight link'>Register with your social networks</p>
        <Input
          elementType="input"
          elementConfig={{
            type: 'text',
            placeholder: 'Ingresa tu nombre de usuario'
          }}
          additionalStyles="input-align"
          value={form?.username}
          errors={formErrors.username}
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
          value={form?.email}
          errors={formErrors.email}
          name="email"
          label=""
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            placeholder: 'Ingresa tu contraseña'
          }}
          additionalStyles="input-align"
          value={form?.password}
          errors={formErrors.password}
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
          value={form?.passwordConfirm}
          errors={formErrors.passwordConfirm}
          name="passwordConfirm"
          changed={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
        {formState.isLoading ? (
          <Spinner type="spinner-replace" />
        ) : (
          <SecondaryButton type="submit" additionalStyles="button-submit" value="Regístrate" />
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
