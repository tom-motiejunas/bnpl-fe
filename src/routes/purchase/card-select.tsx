import { Link, createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardSelectItems } from '@/components/CardSelectItem';
import { useGetPaymentMethod } from '@/hooks/usePayment';

export const Route = createFileRoute('/purchase/card-select')({
  component: CardSelect,
});

function CardSelect() {
  const cards = useGetPaymentMethod();

  return (
    <div className="flex w-full max-w-80 flex-col gap-8">
      <Link to="/purchase/load">
        <CardSelectItems items={cards.data} />
      </Link>
      <Link to="/purchase/add-card">
        <Button>Add New Card</Button>
      </Link>
    </div>
  );
}
