import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { Success } from '@/routes/purchase/success.tsx';

describe('success screen test', () => {
  it('renders success screen', async () => {
    const { findByText } = renderWithContext(Success);

    expect(await findByText('Success')).toBeInTheDocument();
  });
});
