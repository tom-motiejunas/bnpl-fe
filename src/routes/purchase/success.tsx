import { createFileRoute } from '@tanstack/react-router';
import { Check } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/purchase/success')({
  component: Success,
});

export function Success() {
  const [timer, setTimer] = useState(10);

  setInterval(() => {
    setTimer(timer - 1);

    if (timer === 0) {
      window.close();
    }
  }, 1000);

  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8">
      <h1 className="text-2xl text-tertiary">Success</h1>
      <Check size={32} className="text-tertiary"></Check>
      <span className="mt-5 text-tertiary">Closing in {timer}</span>
    </div>
  );
}
