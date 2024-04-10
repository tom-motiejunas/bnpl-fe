import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardSelectItems } from '@/components/CardSelectItem';
import { useGetPaymentMethod, useRemovePaymentMethod } from '@/hooks/usePayment';
import { useEffect } from 'react';

export const Route = createFileRoute('/purchase/card-select')({
  component: CardSelect
});

export function CardSelect() {
  const cards = useGetPaymentMethod();
  const removePaymentMethod = useRemovePaymentMethod();
  const navigate = useNavigate();

  const onConfirmCard = (cardId: string) => {
    // TODO: Move this to useContext
    localStorage.setItem('paymentMethodId', cardId);
    navigate({ to: '/purchase/confirm' });
  };

  const onDeleteCard = (cardId: string) => {
    removePaymentMethod.mutate({ paymentMethodIdentifier: cardId });
  };

  useEffect(() => {
    if (!removePaymentMethod.isSuccess) {
      return;
    }
    cards.refetch();
  }, [cards, removePaymentMethod.isSuccess]);


  if (removePaymentMethod.isError) {
    // TODO: Add better error handling
    console.error(removePaymentMethod.failureReason);
  }


  return (
    <div className="flex w-full max-w-96 flex-col gap-8">
      <CardSelectItems items={cards.data} onConfirmCard={onConfirmCard} onDeleteCard={onDeleteCard} />
      <Link to="/purchase/add-card">
        <Button>Add New Card</Button>
      </Link>
    </div>
  );
}
