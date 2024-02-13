export interface LoginResponse {
  refresh: string;
  access: string;
}

export interface RefreshResponse {
  access: string;
}
