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

interface CustomEvent extends Event {
  inputType?: string;
}

export const Route = createFileRoute('/purchase/add-card')({
  component: AddCard,
});

const addCardSchema = z.object({
  cardholderName: z.string().min(1).max(64),
  cardNumber: z.string().length(19, 'Card number must be 16 digit long'),
  expiryDate: z.string().length(7, "Expiry date must be 'MM / YY' format"),
  securityCode: z.string().length(3, 'Security code must be 3 digit long'),
});

function AddCard() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof addCardSchema>>({
    resolver: zodResolver(addCardSchema),
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
    },
  });
  const maxExpiryDateLength = 7;
  const maxCardNumberLength = 19;

  function onSubmit(values: z.infer<typeof addCardSchema>) {
    navigate({ to: '/purchase/card-select' });
  }

  function formatExpiryDate(e: React.FormEvent<HTMLInputElement>) {
    let input = e.currentTarget.value.replace(/\D/g, '');
    let formattedInput = input.replace(/(\d{2})(\d{0,2})/, '$1 / $2');
    const lengthBeforeMonthInput = 5;

    if (formattedInput.length === 1 && +formattedInput > 1) {
      formattedInput = `0${formattedInput}`;
    }
    if (+formattedInput[0] > 1) {
      formattedInput = formattedInput.replace(formattedInput.charAt(0), '0');
    }
    if (
      (e.nativeEvent as CustomEvent).inputType === 'deleteContentBackward' &&
      formattedInput.length === lengthBeforeMonthInput
    ) {
      formattedInput = formattedInput.substring(0, 2);
    }
    if (formattedInput.length > maxExpiryDateLength) {
      formattedInput = formattedInput.substring(0, maxExpiryDateLength);
    }
    form.setValue('expiryDate', formattedInput);
  }

  function formatCardNumber(e: React.FormEvent<HTMLInputElement>) {
    let input = e.currentTarget.value.replace(/\D/g, '');
    let formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 ');

    if (formattedInput.length > maxCardNumberLength) {
      formattedInput = formattedInput.substring(0, maxCardNumberLength);
    }

    form.setValue('cardNumber', formattedInput);
  }

  return (
    <div className="w-80">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <FormField
            control={form.control}
            name="cardholderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-tertiary">
                  Cardholders Name
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="First Last" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-tertiary">
                  Credit Card Number
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    inputMode="numeric"
                    onChange={(e) => formatCardNumber(e)}
                    maxLength={maxCardNumberLength}
                    placeholder="**** **** **** ****"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-tertiary">
                    Expiry Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode="numeric"
                      maxLength={maxExpiryDateLength}
                      onChange={(e) => formatExpiryDate(e)}
                      placeholder="MM / YY"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="securityCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-tertiary">
                    Security Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      inputMode="numeric"
                      maxLength={3}
                      placeholder="CVC"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>

          <Button type="submit" className="mt-8">
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
}
