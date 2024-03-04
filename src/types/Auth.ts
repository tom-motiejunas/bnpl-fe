export interface TokenResponse {
  token: string;
}

export interface StatusResponse {
  status: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
}
