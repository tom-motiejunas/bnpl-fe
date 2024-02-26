import { PAYMENT_METHOD_QUERY_KEY } from '@/constants';
import { postPaymentMethod } from '@/services/paymentMethod';
import { useMutation } from '@tanstack/react-query';

export const usePaymentMethod = () =>
  useMutation({
    mutationKey: PAYMENT_METHOD_QUERY_KEY,
    mutationFn: postPaymentMethod,
  });
