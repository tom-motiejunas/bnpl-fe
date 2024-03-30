import { ConfirmOrderRequest, OrderItem } from '@/types/Order';

export async function getOrder(): Promise<OrderItem> {
  const orderParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`,
    },
  };

  const orderId = localStorage.getItem('orderId');
  const shopId = localStorage.getItem('shopId');
  // TODO: Add toaster if not found

  const response = await fetch(
    `http://bnpl.test:89/api/get-order/${orderId}/shop/${shopId}`,
    orderParams,
  );

  if (!response.ok) {
    throw new Error(`Failed to get order`);
  }

  return response.json();
}

export async function submitOrder(confirmOrderRequest: ConfirmOrderRequest) {
  const orderParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`,
    },
    body: JSON.stringify(confirmOrderRequest),
  };

  const response = await fetch(
    'http://bnpl.test:89/api/confirm-order',
    orderParams,
  );

  if (!response.ok) {
    throw new Error(`Failed to confirm order`);
  }

  return response.json();
}
