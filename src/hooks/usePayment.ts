import {
  GET_PAYMENT_METHOD_QUERY_KEY,
  PAYMENT_METHOD_QUERY_KEY, REMOVE_PAYMENT_METHOD_QUERY_KEY
} from '@/constants';
import { postPaymentMethod, getPaymentMethod, removePaymentMethod } from '@/services/paymentMethod';
import { useMutation, useQuery } from '@tanstack/react-query';

export const usePaymentMethod = () =>
  useMutation({
    mutationKey: PAYMENT_METHOD_QUERY_KEY,
    mutationFn: postPaymentMethod
  });

export const useRemovePaymentMethod = () =>
  useMutation({
    mutationKey: REMOVE_PAYMENT_METHOD_QUERY_KEY,
    mutationFn: removePaymentMethod
  });

export const useGetPaymentMethod = () =>
  useQuery({
    queryKey: GET_PAYMENT_METHOD_QUERY_KEY,
    queryFn: getPaymentMethod
  });
