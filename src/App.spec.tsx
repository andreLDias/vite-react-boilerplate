import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('shows count button', () => {
    render(<App />)
    expect(screen.getByText(/count is/)).toBeInTheDocument()
  })
})
