import { PaymentMethodRequest } from '@/types/PaymentMethod';

export async function getPaymentMethod() {
  const paymentMethodParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`
    }
  };

  const response = await fetch(
    'http://bnpl.test:89/api/get-payments',
    paymentMethodParams
  );

  if (!response.ok) {
    throw new Error(`Failed to get payment methods`);
  }

  return response.json();
}

export async function postPaymentMethod(
  PaymentMethodRequest: PaymentMethodRequest
): Promise<void> {
  const paymentMethodParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`
    },
    body: JSON.stringify(PaymentMethodRequest)
  };

  const response = await fetch(
    'http://bnpl.test:89/api/add-payment',
    paymentMethodParams
  );

  if (!response.ok) {
    throw new Error(`Failed to add payment method`);
  }

  return response.json();
}

export async function removePaymentMethod(
  PaymentMethodRequest: PaymentMethodRequest
): Promise<void> {
  const paymentMethodParams = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`
    },
    body: JSON.stringify(PaymentMethodRequest)
  };

  const response = await fetch(
    'http://bnpl.test:89/api/remove-payment',
    paymentMethodParams
  );

  if (!response.ok) {
    throw new Error(`Failed to remove payment method`);
  }

  return;
}
