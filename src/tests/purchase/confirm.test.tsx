import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { Confirm } from '@/routes/purchase/confirm.tsx';

describe('confirm screen test', () => {
  it('renders confirm screen', async () => {
    const { findByText } = renderWithContext(Confirm);

    expect(await findByText('Confirm Purchase')).toBeInTheDocument();
  });
});
