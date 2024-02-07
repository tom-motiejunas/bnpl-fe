import { createFileRoute } from '@tanstack/react-router';
import { Check } from 'lucide-react';

export const Route = createFileRoute('/purchase/success')({
  component: Success,
});

function Success() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-tertiary">Success</h1>
      <Check size={32} className="text-tertiary"></Check>
    </div>
  );
}
