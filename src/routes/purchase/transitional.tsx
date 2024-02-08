import { Button } from '@/components/ui/button';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/purchase/transitional')({
  component: Transitional,
});

function Transitional() {
  return (
    <div className="flex flex-col items-center justify-between gap-40">
      <h1 className="text-2xl text-tertiary">
        {'Let’s add your payment card'}
      </h1>
      <Link to="/purchase/add-card" className="w-full">
        <Button>Next</Button>
      </Link>
    </div>
  );
}
