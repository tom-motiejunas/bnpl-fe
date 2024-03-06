import { ORDER_QUERY_KEY } from '@/constants';
import { getOrder } from '@/services/order';
import { useQuery } from '@tanstack/react-query';

export const useOrder = () =>
  useQuery({
    queryKey: ORDER_QUERY_KEY,
    queryFn: getOrder,
  });

// TODO: implement useSubmitOrder
