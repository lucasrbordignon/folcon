export type contactHomeType = {
  id: string;
  client: {
    id: string,
    name: string
  }
  contactedAt: string;
  interest: string;
  status: string;
  observation: string;  
  budgets: number;
}