import { OrderItem } from '@/types/Order';

export async function getOrder(): Promise<OrderItem> {
  const orderParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`,
    },
  };

  const orderId = localStorage.getItem('orderId');

  const response = await fetch(
    `http://bnpl.test:89/api/open-cart/get-order/${orderId}`,
    orderParams,
  );

  if (!response.ok) {
    throw new Error(`Failed to get order`);
  }

  return response.json();
}
