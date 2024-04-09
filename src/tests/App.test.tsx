import { render, screen } from '@testing-library/react'
import { Index } from '@/routes';

describe('App', () => {
  it('renders the App component', () => {
    render(<Index />)

    expect(screen.getByRole('heading')).toHaveTextContent('Welcome Home!');
  })
})
