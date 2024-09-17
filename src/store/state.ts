export interface Transactions {
  id: string | number;
  title: string;
  price: number;
  positive: boolean;
}

export interface SavingsOrObjectives {
  id: string;
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
      id: crypto.randomUUID(),
      title: 'IPhone',
      contribution: 250,
      costPerMonth: 500,
    },
    {
      id: crypto.randomUUID(),
      title: 'Macbook',
      contribution: 300,
      costPerMonth: 1000,
    },
  ],
  savings: [
    {
      id: crypto.randomUUID(),
      title: 'Wedding',
      contribution: 250,
      costPerMonth: 500,
    },
    {
      id: crypto.randomUUID(),
      title: 'Vacation',
      contribution: 300,
      costPerMonth: 1000,
    },
  ],
  transactions: [
    {
      id: crypto.randomUUID(),
      title: 'Phone Case',
      price: 980,
      positive: false,
    },
    { id: crypto.randomUUID(), title: 'Salary', price: 28000, positive: true },
    { id: crypto.randomUUID(), title: 'Lunch', price: 1200, positive: false },
    { id: crypto.randomUUID(), title: 'Coffee', price: 580, positive: false },
  ],
};
