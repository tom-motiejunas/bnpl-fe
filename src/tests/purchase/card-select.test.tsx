import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { CardSelect } from '@/routes/purchase/card-select.tsx';

describe('confirm screen test', () => {
  it('renders confirm screen', async () => {
    const { findByText } = renderWithContext(CardSelect);

    expect(await findByText('Add New Card')).toBeInTheDocument();
  });
});
