import { Footer } from "@clean/presentation/components/embedded-layout"
import { render, screen } from "@testing-library/react"

window.scrollTo = jest.fn()

const makeSut = (): void => {
  render(<Footer />)
}

describe('Footer component', () => {
  test('Should render footer with correct ui', () => {
    makeSut()
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const paragraphs = footer.childNodes
    expect(paragraphs[0]).toHaveTextContent('Trilce')
    expect(paragraphs[1]).toHaveTextContent('© 2020 Trilce, todos los derechos reservados.')
  })
})