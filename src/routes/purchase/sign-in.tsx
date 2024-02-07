import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/purchase/sign-in')({
  component: SignIn,
});

function SignIn() {
  return <div>abcd</div>;
}
