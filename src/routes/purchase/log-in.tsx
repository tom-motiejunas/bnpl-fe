'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const Route = createFileRoute('/purchase/log-in')({
  component: LogIn,
});

const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

function LogIn() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof logInSchema>) {
    navigate({ to: '/purchase/card-select' });
  }

  return (
    <div className="w-80">
      <h1 className="pb-5 text-center text-2xl text-tertiary">Log In</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-tertiary">Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-tertiary">
                  Password
                </FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit" className="mt-8">
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
}
