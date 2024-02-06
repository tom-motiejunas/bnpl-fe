import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/log-in')({
  component: LogIn,
});

function LogIn() {
  return (
    <div className="bg-background-color flex h-svh flex-col items-center gap-48 pt-12"></div>
  );
}
