import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { CardSelectItem } from '@/components/CardSelectItem';

export const Route = createFileRoute('/purchase/card-select')({
  component: CardSelect,
});

function CardSelect() {
  return (
    <div className="flex w-full max-w-80 flex-col gap-8">
      <CardSelectItem />
      <Button>Add New Card</Button>
    </div>
  );
}
