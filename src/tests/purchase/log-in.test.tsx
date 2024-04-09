import { LogIn } from '@/routes/purchase/log-in.tsx';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithContext } from '@/utils/testRenderWithContext.tsx';

describe('log-in', () => {
  it('renders log-in', async () => {
    const { findByText } = renderWithContext(() => <LogIn/>);

    expect(await findByText('Log In')).toBeInTheDocument();
  });

  it('show error message', async () => {
    const { findByText } = renderWithContext(() => <LogIn/>);
    await waitFor(() => fireEvent.click(screen.getByText('Confirm')));

    expect(await findByText('String must contain at least 4 character(s)')).toBeInTheDocument();
    expect(await findByText('Invalid email')).toBeInTheDocument();
  })
});
