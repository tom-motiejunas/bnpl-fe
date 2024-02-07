import { CreditCard } from 'lucide-react';

export function CardSelectItem() {
  return (
    <div className="bg-gray-200 hover:bg-gray-200/80 flex cursor-pointer gap-4 rounded-md px-2">
      <div className="ce grid flex-grow-[1] place-items-center">
        <CreditCard />
      </div>
      <div className="flex flex-grow-[1] flex-col">
        <span className="text-sm">Jonas Jonaitis</span>
        <span className="text-sm">**** **** **** 1115</span>
      </div>
      <div className="flex flex-grow-[4] flex-col text-center">
        <span className="text-sm">Expires</span>
        <span className="text-sm">03/25</span>
      </div>
    </div>
  );
}
