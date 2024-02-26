import { PaymentMethodRequest } from '@/types/PaymentMethod';

export async function postPaymentMethod(
  PaymentMethodRequest: PaymentMethodRequest,
): Promise<void> {
  const paymentMethodParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`,
    },
    body: JSON.stringify(PaymentMethodRequest),
  };

  const response = await fetch(
    'http://bnpl.test:89/api/add-payment',
    paymentMethodParams,
  );

  if (!response.ok) {
    throw new Error(`Failed to add payment method`);
  }

  return response.json();
}
