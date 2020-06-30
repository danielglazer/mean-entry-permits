export interface User {
  id: number;
  password: string;
  name: string;
  role: UserRole;
}

export type UserRole =
  | 'Admin'
  | 'Compuond-Manager'
  | 'Branch-Manager'
  | 'Guard'
  | 'Guest';
