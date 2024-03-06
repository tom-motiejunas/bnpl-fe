import { Button } from '@/components/ui/button';
import { useOrder } from '@/hooks/useOrder';
import { cn } from '@/lib/utils';
import { Link, createFileRoute } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';

export const Route = createFileRoute('/purchase/confirm')({
  component: Confirm,
});

interface ItemProps {
  title: string;
  value: string;
  className?: string;
}

function Confirm() {
  const order = useOrder();

  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-tertiary">Confirm Purchase</h1>
      {order.isFetched && order.data ? (
        <div className="flex flex-col">
          {order.data?.products.map((product, index: number) => (
            <PurchaseItem
              title={product.name}
              value={product.price}
              key={index}
            />
          ))}
          <PurchaseItem title="Shipping" value={`${order.data.shipping}€`} />
          <PurchaseItem
            title={`VAT (${order.data.vat}%)`}
            value={`${order.data.tax}€`}
          />
          <PurchaseItem
            title="Total"
            value={`${order.data.total}€`}
            className="pt-4"
          />
          <PurchaseItem
            title="First payment"
            value={`${order.data.payments[0]}€`}
          />
        </div>
      ) : (
        <Loader2 size={32} className="animate-spin text-tertiary" />
      )}
      <Link to={'/purchase/load'}>
        <Button>Confirm</Button>
      </Link>
    </div>
  );
}

function PurchaseItem({ title, value, className }: ItemProps, key: number) {
  return (
    <div className={cn('flex justify-between gap-4', className)} key={key}>
      <span className="text-center text-tertiary">{title}</span>
      <span className="text-center text-tertiary">{value}</span>
    </div>
  );
}
