import {
  type SavingsOrObjectives,
  type State,
  type Transactions,
  type UserInfo,
} from './state';

type AddContributionPayload = { id: string; additionalContribution: number };

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
  state.objectives = [];
  state.savings = [];
  state.transactions = [];
  localStorage.clear();
};

// ADD

const addTransactions = (state: State, payload: Transactions) => {
  state.transactions.push(payload);
  localStorage.setItem('transactions', JSON.stringify(state.transactions));
};

const addSavings = (state: State, payload: SavingsOrObjectives) => {
  state.savings.push(payload);
  localStorage.setItem('savings', JSON.stringify(state.savings));
};

const addObjectives = (state: State, payload: SavingsOrObjectives) => {
  state.objectives.push(payload);
  localStorage.setItem('objectives', JSON.stringify(state.objectives));
};

// EDIT

const editSavings = (state: State, payload: AddContributionPayload) => {
  const savingsItem = state.savings.find((item) => item.id === payload.id);
  if (savingsItem) {
    savingsItem.contribution += payload.additionalContribution;
    localStorage.setItem('savings', JSON.stringify(state.savings));
  }
};

const editObjectives = (state: State, payload: AddContributionPayload) => {
  const objectiveItem = state.objectives.find((item) => item.id === payload.id);
  if (objectiveItem) {
    objectiveItem.contribution += payload.additionalContribution;
    localStorage.setItem('objectives', JSON.stringify(state.objectives));
  }
};

// DELETE

const deleteSavings = (state: State, payload: string) => {
  state.savings = state.savings.filter((saving) => saving.id !== payload);
  localStorage.setItem('savings', JSON.stringify(state.savings));
};

const deleteObjectives = (state: State, payload: string) => {
  state.objectives = state.objectives.filter(
    (objective) => objective.id !== payload
  );
  localStorage.setItem('objectives', JSON.stringify(state.objectives));
};

const user = { setUser, deleteUser };
const add = { addTransactions, addSavings, addObjectives };
const edit = { editSavings, editObjectives };
const del = { deleteSavings, deleteObjectives };

export const mutations = {
  ...user,
  ...add,
  ...edit,
  ...del,
};
