import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Logo } from '../components/Logo';

export const Route = createFileRoute('/purchase')({
  component: Purchase,
});

function Purchase() {
  return (
    <div className="h-svh bg-background-color">
      <div className="flex h-[500px] flex-col items-center justify-between gap-2 py-12">
        <Logo className="pb-4" />
        <Outlet />
      </div>
    </div>
  );
}
