import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';

import { routeTree } from './routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks';

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY ?? '');

function InnerApp() {
  const auth = useAuth();

  if (auth.isFetched) {
    return <RouterProvider router={router} context={{ auth: auth.data }} />;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  const queryClient = new QueryClient();

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Elements
          stripe={stripePromise}
          options={{
            appearance: {
              theme: 'night',
              rules: {
                '.Input': {
                  border: '1px solid white',
                },
              },
            },
          }}
        >
          <InnerApp />
        </Elements>
      </QueryClientProvider>
    </StrictMode>,
  );
}
