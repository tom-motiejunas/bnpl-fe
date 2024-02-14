import {
  LOGIN_QUERY_KEY,
  LOGOUT_QUERY_KEY,
  SIGNUP_QUERY_KEY,
} from '@/constants';
import { postLogin, postSignup, postLogout } from '@/services/auth';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useLogin = () =>
  useMutation({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: postLogin,
  });

// TODO: change to useMutation
export const useSignup = () =>
  useQuery({
    queryKey: SIGNUP_QUERY_KEY,
    queryFn: postSignup,
  });

// TODO: change to useMutation
export const useLogout = () =>
  useQuery({
    queryKey: LOGOUT_QUERY_KEY,
    queryFn: postLogout,
  });
