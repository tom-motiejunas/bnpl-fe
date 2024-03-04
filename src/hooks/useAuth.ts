import {
  AUTH_QUERY_KEY,
  LOGIN_QUERY_KEY,
  LOGOUT_QUERY_KEY,
  SIGNUP_QUERY_KEY,
} from '@/constants';
import {
  postLogin,
  postSignup,
  postLogout,
  isAuthenticated,
} from '@/services/auth';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useLogin = () =>
  useMutation({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: postLogin,
  });

export const useSignup = () =>
  useMutation({
    mutationKey: SIGNUP_QUERY_KEY,
    mutationFn: postSignup,
  });

export const useLogout = () =>
  useMutation({
    mutationKey: LOGOUT_QUERY_KEY,
    mutationFn: postLogout,
  });

export const useAuth = () =>
  useQuery({
    queryKey: AUTH_QUERY_KEY,
    queryFn: isAuthenticated,
  });
