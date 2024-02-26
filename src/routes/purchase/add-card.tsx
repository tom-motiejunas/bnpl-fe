'use client';

import { Button } from '@/components/ui/button';
import { usePaymentMethod } from '@/hooks/usePayment';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/purchase/add-card')({
  component: AddCard,
});

function AddCard() {
  const stripe = useStripe();
  const elements = useElements();
  const addPaymentMethod = usePaymentMethod();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });

    if (response.error) {
      // TODO: show error toaster here
      console.error(`Error in stripe`);
      console.error(response.error);
      return;
    }

    const paymentMethod = response.paymentMethod;

    addPaymentMethod.mutate({ paymentMethodIdentifier: paymentMethod.id });

    if (addPaymentMethod.error) {
      // TODO: show error toaster here
      console.error('Error in back-end');
      console.error(addPaymentMethod.error);
      return;
    }

    navigate({ to: '/purchase/card-select' });
  };

  return (
    <div className="w-80">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#F4EEE0',
                '::placeholder': {
                  color: '#F4EEE0',
                },
              },
            },
          }}
        />
        <Button type="submit" className="mt-8">
          Confirm
        </Button>
      </form>
    </div>
  );
}
