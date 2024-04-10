import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardSelectItems } from '@/components/CardSelectItem';
import { useGetPaymentMethod } from '@/hooks/usePayment';

export const Route = createFileRoute('/purchase/card-select')({
  component: CardSelect
});

export function CardSelect() {
  const cards = useGetPaymentMethod();
  const navigate = useNavigate();

  const onConfirmCard = (cardId: string) => {
    // TODO: Move this to useContext
    localStorage.setItem('paymentMethodId', cardId);
    navigate({ to: '/purchase/confirm' });
  };

  // TODO: Add a method to remove a card

  return (
    <div className="flex w-full max-w-80 flex-col gap-8">
      <CardSelectItems items={cards.data} onConfirmCard={onConfirmCard} />
      <Link to="/purchase/add-card">
        <Button>Add New Card</Button>
      </Link>
    </div>
  );
}
