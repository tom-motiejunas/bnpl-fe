import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { Logo } from '../components/Logo';

export const Route = createFileRoute('/purchase')({
  component: Purchase,
  beforeLoad: ({ location }) => {
    const notAuthenticatedRoutes = [
      '/purchase',
      '/purchase/log-in',
      '/purchase/sign-up',
    ];
    const isAuthenticated = localStorage.getItem('token') ? true : false;
    if (notAuthenticatedRoutes.includes(location.pathname) && isAuthenticated) {
      return redirect({
        to: '/purchase/card-select',
      });
    }

    if (notAuthenticatedRoutes.includes(location.pathname)) {
      return;
    }

    if (!isAuthenticated) {
      throw redirect({
        to: '/purchase',
      });
    }
  },
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
