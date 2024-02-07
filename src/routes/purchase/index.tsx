import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/purchase/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex w-80 flex-col gap-8">
      <Link to="/purchase/log-in">
        <Button>Log In</Button>
      </Link>
      <Link to="/purchase/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Outlet />
    </div>
  );
}
