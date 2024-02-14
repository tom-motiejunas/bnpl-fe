import { LoginRequest, StatusResponse, TokenResponse } from '@/types';

// TODO: add fetch params
export async function postSignup(): Promise<TokenResponse> {
  return (
    await fetch('http://bnpl.test:89/api/sign-up')
  ).json() as Promise<TokenResponse>;
}

export async function postLogin(
  LoginRequest: LoginRequest,
): Promise<TokenResponse> {
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

  return response.json() as Promise<TokenResponse>;
}

// TODO: add fetch params
export async function postLogout(): Promise<StatusResponse> {
  return (
    await fetch('http://bnpl.test:89/api/log-out')
  ).json() as Promise<StatusResponse>;
}
