import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { SignUp } from '@/routes/purchase/sign-up.tsx';
import { fireEvent, screen, waitFor } from '@testing-library/react';


describe('sign up test', () => {
  it('renders sign up page', async () => {
    const {findByText} = renderWithContext(SignUp);

    expect(await findByText('Sign Up')).toBeInTheDocument();
  })

  it('sign up form throws error', async () => {
    const {findByText} = renderWithContext(SignUp);
    await waitFor(() => fireEvent.click(screen.getByText('Confirm')));

    expect(await findByText('String must contain at least 4 character(s)')).toBeInTheDocument();
    expect(await findByText('Invalid email')).toBeInTheDocument();
  })
});
