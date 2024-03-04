import {
  LoginRequest,
  SignupRequest,
  StatusResponse,
  TokenResponse,
} from '@/types';

export async function postSignup(SignupRequest: SignupRequest): Promise<void> {
  const signupParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(SignupRequest),
  };

  const response = await fetch('http://bnpl.test:89/api/sign-up', signupParams);

  if (!response.ok) {
    throw new Error(`Failed to signup`);
  }

  const token = response.json() as Promise<TokenResponse>;
  localStorage.setItem('token', JSON.stringify((await token).token));

  return;
}

export async function postLogin(LoginRequest: LoginRequest): Promise<void> {
  const loginParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(LoginRequest),
  };

  const response = await fetch('http://bnpl.test:89/api/log-in', loginParams);

  if (!response.ok) {
    throw new Error(`Failed to login`);
  }

  const token = response.json() as Promise<TokenResponse>;
  localStorage.setItem('token', JSON.stringify((await token).token));

  return;
}

// TODO: add fetch params
export async function postLogout(): Promise<StatusResponse> {
  const logoutParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') ?? '')}`,
    },
  };

  const response = await fetch(
    'http://bnpl.test:89/api/get-payments',
    logoutParams,
  );

  if (!response.ok) {
    throw new Error(`Failed to logout`);
  }

  return response.json();
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('token') ? true : false;
}
