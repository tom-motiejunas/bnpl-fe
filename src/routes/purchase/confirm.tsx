import { Button } from '@/components/ui/button';
import { useOrder, useSubmitOrder } from '@/hooks/useOrder';
import { cn } from '@/lib/utils';
import { ConfirmOrderRequest } from '@/types/Order';
import { createFileRoute } from '@tanstack/react-router';
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
  const submitOrder = useSubmitOrder();

  const onConfirm = () => {
    const orderId = localStorage.getItem('orderId');
    const paymentMethodId = localStorage.getItem('paymentMethodId');

    if (!orderId || !paymentMethodId) {
      return;
    }

    const submitOrderValues: ConfirmOrderRequest = {
      order_id: +orderId,
      payment_method_id: paymentMethodId,
    };

    submitOrder.mutate(submitOrderValues);
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-tertiary">Confirm Purchase</h1>
      {order.isFetched && order.data ? (
        <div className="flex w-[300px] flex-col">
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
      <Button onClick={onConfirm}>Confirm</Button>
    </div>
  );
}

function PurchaseItem({ title, value, className }: ItemProps, key: number) {
  return (
    <div
      className={cn('flex items-center justify-between gap-4', className)}
      key={key}
    >
      <span className="text-center text-tertiary">{title}</span>
      <span className="text-center text-tertiary">{value}</span>
    </div>
  );
}
