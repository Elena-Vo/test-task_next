export interface User {
  id: number
  name: string
  username?: string
  email: string
  address?: {
    street: string
    city: string
  }
  phone?: string
  website?: string
  company: {
    name: string;
    catchPhrase: string;
    bs: string;

  }
  
}