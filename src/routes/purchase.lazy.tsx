import { Link, createLazyFileRoute } from '@tanstack/react-router';
import Logo from '../components/Logo';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/purchase')({
  component: Purchase,
});

function Purchase() {
  return (
    <div className="bg-background-color flex h-svh flex-col items-center gap-48 pt-12">
      <Logo />
      <div className="flex flex-col gap-8">
        <Link to="/log-in">
          <Button>Log In</Button>
        </Link>
        <Link to="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </div>
  );
}
