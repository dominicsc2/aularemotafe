import faker from "@faker-js/faker"
import { fireEvent, screen } from "@testing-library/react"

export const testStatusForField = (fieldName: string, validationError?: string): void => {
  const fieldStatus = screen.getByTestId(`${fieldName}-error`)
  expect(fieldStatus).toBeInTheDocument()
  expect(fieldStatus.textContent).toBe('* ' + validationError)
}

export const populateField = (fieldName: string, value = faker.random.word()): void => {
  const input = screen.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}