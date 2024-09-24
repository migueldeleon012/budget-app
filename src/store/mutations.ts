import {
  type SavingsOrGoals,
  type State,
  type Transactions,
  type UserInfo,
} from './state';

type AddContributionPayload = { id: string; additionalContribution: number };

// RESET MONTHLY

const resetMonthly = (state: State) => {
  state.savings = [];
  state.transactions = [];
};

// USER

const setUser = (state: State, payload: UserInfo) => {
  state.userName = payload.userName;
  state.income = payload.income;
  state.selectedCurrency = payload.selectedCurrency;

  localStorage.setItem('userName', JSON.stringify(payload.userName));
  localStorage.setItem('income', JSON.stringify(payload.income));
  localStorage.setItem(
    'selectedCurrency',
    JSON.stringify(payload.selectedCurrency)
  );
};

const deleteUser = (state: State) => {
  state.userName = null;
  state.income = null;
  state.selectedCurrency = null;
  state.goals = [];
  state.savings = [];
  state.transactions = [];
  localStorage.clear();
};

// ADD

const addTransactions = (state: State, payload: Transactions) => {
  state.transactions.push(payload);
  localStorage.setItem('transactions', JSON.stringify(state.transactions));
};

const addSavings = (state: State, payload: SavingsOrGoals) => {
  state.savings.push(payload);
  localStorage.setItem('savings', JSON.stringify(state.savings));
};

const addGoals = (state: State, payload: SavingsOrGoals) => {
  state.goals.push(payload);
  localStorage.setItem('goals', JSON.stringify(state.goals));
};

// EDIT

const editSavings = (state: State, payload: AddContributionPayload) => {
  const savingsItem = state.savings.find((item) => item.id === payload.id);
  if (savingsItem) {
    savingsItem.contribution += payload.additionalContribution;
    localStorage.setItem('savings', JSON.stringify(state.savings));
  }
};

const editGoals = (state: State, payload: AddContributionPayload) => {
  const goalItem = state.goals.find((item) => item.id === payload.id);
  if (goalItem) {
    goalItem.contribution += payload.additionalContribution;
    localStorage.setItem('goals', JSON.stringify(state.goals));
  }
};

// DELETE

const deleteSavings = (state: State, payload: string) => {
  state.savings = state.savings.filter((saving) => saving.id !== payload);
  localStorage.setItem('savings', JSON.stringify(state.savings));
};

const deleteGoals = (state: State, payload: string) => {
  state.goals = state.goals.filter((goal) => goal.id !== payload);
  localStorage.setItem('goals', JSON.stringify(state.goals));
};

const user = { setUser, deleteUser };
const add = { addTransactions, addSavings, addGoals };
const edit = { editSavings, editGoals };
const del = { deleteSavings, deleteGoals };

export const mutations = {
  ...user,
  ...add,
  ...edit,
  ...del,
  resetMonthly,
};
