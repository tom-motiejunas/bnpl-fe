import { ORDER_QUERY_KEY, ORDER_SUBMIT_QUERY_KEY } from '@/constants';
import { getOrder, submitOrder } from '@/services/order';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useOrder = () =>
  useQuery({
    queryKey: ORDER_QUERY_KEY,
    queryFn: getOrder,
  });

export const useSubmitOrder = () =>
  useMutation({
    mutationKey: ORDER_SUBMIT_QUERY_KEY,
    mutationFn: submitOrder,
  });
