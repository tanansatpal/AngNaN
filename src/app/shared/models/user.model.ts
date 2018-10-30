export class User {
  isLoggedIn: boolean;
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  customer_groups: string[];
  role: string;
  current_role: string;
  active: string;
  verified: string;
  currency: object & { name: string, conversion_rate: string };
  language: string;
}
