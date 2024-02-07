import { createFileRoute } from '@tanstack/react-router';
import { Loader2 } from 'lucide-react';

export const Route = createFileRoute('/purchase/load')({
  component: Load,
});

function Load() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-tertiary">Confirming purchase...</h1>
      <Loader2 size={32} className="animate-spin text-tertiary"></Loader2>
    </div>
  );
}
