import { CreditCardItem } from '@/types/CreditCardItem';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

interface CreditCardProps {
  items?: CreditCardItem[];
  onConfirmCard: (cardId: string) => void;
  onDeleteCard: (cardId: string) => void;
}

export function CardSelectItems({ items, onConfirmCard, onDeleteCard }: CreditCardProps) {
  return (
    <>
      {items?.map((item) => (
        <div className="flex gap-2 items-center w-full" key={item.id}>
          <button
            className="flex flex-1 cursor-pointer gap-4 rounded-md bg-gray-200 px-2 hover:bg-gray-200/80"
            onClick={() => onConfirmCard(item.id)}
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
          </button>
          <Button className="text-red-500 w-[70px] px-2 py-6" onClick={() => onDeleteCard(item.id)}>Delete</Button>
        </div>
      ))}
    </>
  );
}
