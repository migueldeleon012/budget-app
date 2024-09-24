export interface UserInfo {
  userName: string;
  income: number;
  selectedCurrency: string;
}

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
  userName: UserInfo['userName'] | null;
  selectedCurrency: UserInfo['selectedCurrency'] | null;
  income: UserInfo['income'] | null;
  objectives: SavingsOrObjectives[];
  savings: SavingsOrObjectives[];
  transactions: Transactions[];
}

export const state: State = {
  userName: localStorage.getItem('userName') || null,
  selectedCurrency: localStorage.getItem('selectedCurrency') || null,
  income: +JSON.parse(localStorage.getItem('income') || '0'),
  objectives: JSON.parse(localStorage.getItem('objectives') || '[]'),
  savings: JSON.parse(localStorage.getItem('savings') || '[]'),
  transactions: JSON.parse(localStorage.getItem('transactions') || '[]'),
};
