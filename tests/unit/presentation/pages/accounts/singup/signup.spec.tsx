import { Signup } from "@clean/presentation/pages"
import { render, RenderResult, screen } from "@testing-library/react"

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <Signup 
      validation={null}
    />
  )

  return {
    sut
  }
}

describe('SignupPage component', () => {
  test('Should start with initial state', () => {
    makeSut()
    expect(screen.getByTestId('email-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('username-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('password-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('passwordConfirm-wrap').children).toHaveLength(1)

    expect(screen.queryByTestId('email-error')).toBeNull()
    expect(screen.queryByTestId('username-error')).toBeNull()
    expect(screen.queryByTestId('password-error')).toBeNull()
    expect(screen.queryByTestId('passwordConfirm-error')).toBeNull()


    expect(screen.getByTestId('email').textContent).toBe('')
    expect(screen.getByTestId('username').textContent).toBe('')
    expect(screen.getByTestId('password').textContent).toBe('')
    expect(screen.getByTestId('passwordConfirm').textContent).toBe('')
  })
})