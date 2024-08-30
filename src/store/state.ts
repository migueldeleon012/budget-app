export interface Transactions {
  id: string | number;
  title: string;
  price: number;
  positive: boolean;
}

export interface SavingsOrObjectives {
  title: string;
  contribution: number;
  costPerMonth: number;
}

export interface State {
  income: number;
  spent: number;
  objectives: SavingsOrObjectives[];
  savings: SavingsOrObjectives[];
  transactions: Transactions[];
}

export const state: State = {
  income: 28000,
  spent: 10000,
  objectives: [
    {
      title: 'IPhone',
      contribution: 250,
      costPerMonth: 500,
    },
    {
      title: 'Macbook',
      contribution: 300,
      costPerMonth: 1000,
    },
  ],
  savings: [
    {
      title: 'Wedding',
      contribution: 250,
      costPerMonth: 500,
    },
    {
      title: 'Vacation',
      contribution: 300,
      costPerMonth: 1000,
    },
  ],
  transactions: [
    { id: 1, title: 'Phone Case', price: 980, positive: false },
    { id: 12, title: 'Salary', price: 28000, positive: true },
    { id: 13, title: 'Lunch', price: 1200, positive: false },
    { id: 14, title: 'Coffee', price: 580, positive: false },
  ],
};
