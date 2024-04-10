import { renderWithContext } from '@/utils/testRenderWithContext.tsx';
import { AddCard } from '@/routes/purchase/add-card.tsx';
import { Elements } from '@stripe/react-stripe-js';

describe('confirm screen test', () => {
  it('renders confirm screen', async () => {
    const { findByText } = renderWithContext(() => <Elements stripe={null}><AddCard /></Elements>);

    expect(await findByText('Confirm')).toBeInTheDocument();
  });
});
