import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumber from './PhoneNumber';
import '@testing-library/jest-dom';

describe('Dashboard component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the component', async() => {
    render(<PhoneNumber></PhoneNumber>)
    const inputElement = screen.getByTestId('phone-input')
    expect(inputElement).toBeInTheDocument()
  })
  it('formats the phone nu,ber', async() => {
    render(<PhoneNumber />)
    const inputElement = screen.getByTestId('phone-input') as HTMLInputElement
    fireEvent.change(inputElement, { target: {value: '1234567890'}})
    expect(inputElement.value).toBe('(123)456-7890')
  })
})