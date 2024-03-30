import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { Logo } from '../components/Logo';

interface SearchParams {
  order_id?: string;
  shop_id?: string;
}

export const Route = createFileRoute('/purchase')({
  component: Purchase,
  beforeLoad: ({ location }) => {
    const search: SearchParams = location.search;

    if (search?.order_id && search?.shop_id) {
      localStorage.setItem('orderId', search.order_id);
      localStorage.setItem('shopId', search.shop_id);
    } else {
      // TODO: return that no order or shop has been found
    }

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
