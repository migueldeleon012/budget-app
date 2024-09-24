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

export interface SavingsOrGoals {
  id: string;
  title: string;
  contribution: number;
  cost: number;
}
export interface State {
  userName: UserInfo['userName'] | null;
  selectedCurrency: UserInfo['selectedCurrency'] | null;
  income: UserInfo['income'] | null;
  goals: SavingsOrGoals[];
  savings: SavingsOrGoals[];
  transactions: Transactions[];
}

export const state: State = {
  userName: JSON.parse(localStorage.getItem('userName') || 'null'),
  selectedCurrency: JSON.parse(
    localStorage.getItem('selectedCurrency') || 'null'
  ),
  income: +JSON.parse(localStorage.getItem('income') || '0'),
  goals: JSON.parse(localStorage.getItem('goals') || '[]'),
  savings: JSON.parse(localStorage.getItem('savings') || '[]'),
  transactions: JSON.parse(localStorage.getItem('transactions') || '[]'),
};
