import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { Index } from '@/routes/purchase/index.tsx';

describe('index screen test', () => {
  it('renders index screen', async () => {
    const { findByText } = renderWithContext(Index);

    expect(await findByText('Sign Up')).toBeInTheDocument();
    expect(await findByText('Log In')).toBeInTheDocument();
  });
});
