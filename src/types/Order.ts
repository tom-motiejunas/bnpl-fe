export interface OrderItem {
  currency: string;
  sub_total: number;
  products: Product[];
  shipping: string;
  tax: number;
  vat: number;
  order_id: number;
  total: number;
  date_added: string;
  payments: number[];
}

export interface Product {
  name: string;
  price: string;
}

export interface ConfirmOrderRequest {
  order_id: number;
  shop_id: number;
  payment_method_id: string;
}
