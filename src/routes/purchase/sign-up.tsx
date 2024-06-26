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
import { useSignup } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const Route = createFileRoute('/purchase/sign-up')({
  component: SignUp,
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export function SignUp() {
  const navigate = useNavigate();
  const signup = useSignup();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    signup.mutate(values);
  }

  useEffect(() => {
    if (!signup.isSuccess) {
      return;
    }
    navigate({ to: '/purchase/card-select' });
  }, [signup.isSuccess, navigate]);

  return (
    <div className="w-80">
      <h1 className="pb-5 text-center text-2xl text-tertiary">Sign Up</h1>
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
