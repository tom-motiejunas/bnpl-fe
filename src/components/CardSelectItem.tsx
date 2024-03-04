import { CreditCardItem } from '@/types/CreditCardItem';
import { CreditCard } from 'lucide-react';

interface CreditCardProps {
  items?: CreditCardItem[];
}

export function CardSelectItems({ items }: CreditCardProps) {
  return (
    <>
      {items?.map((item) => (
        <div
          className="mb-4 flex cursor-pointer gap-4 rounded-md bg-gray-200 px-2 hover:bg-gray-200/80"
          key={item.id}
        >
          <div className="fa-cc-visa grid flex-grow-[1] place-items-center">
            <CreditCard />
          </div>
          <div className="flex flex-grow-[1] flex-col justify-center py-1">
            <span className="text-sm">**** **** **** {item.card.last4}</span>
            <span className="text-sm">
              {item.billing_details.name ?? 'Jonas Jonaitis'}
            </span>
          </div>
          <div className="flex flex-grow-[4] flex-col justify-center text-center">
            <span className="text-sm">Expires</span>
            <span className="text-sm">
              {item.card.exp_month}/{`${item.card.exp_year}`.slice(-2)}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
