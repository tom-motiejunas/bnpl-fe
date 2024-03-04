export interface CreditCardItem {
  id: string;
  billing_details: BillingDetails;
  card: CardDetail;
}
export interface BillingDetails {
  name: string;
}

export interface CardDetail {
  exp_year: number;
  exp_month: number;
  last4: string;
}
