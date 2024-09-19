import type { SavingsOrObjectives, State, Transactions } from './state';

type AddContributionPayload = { id: string; additionalContribution: number };

// USER

const setUser = (state: State, payload: string) => {
  state.userName = payload;
  localStorage.setItem('userName', JSON.stringify(payload)); // Save to localStorage
};

const deleteUser = (state: State) => {
  state.userName = null;
  localStorage.removeItem('userName');
};

// ADD

const addTransactions = (state: State, payload: Transactions) => {
  state.transactions.push(payload);
};

const addSavings = (state: State, payload: SavingsOrObjectives) => {
  state.savings.push(payload);
};

const addObjectives = (state: State, payload: SavingsOrObjectives) => {
  state.objectives.push(payload);
};

// EDIT

const editSavings = (state: State, payload: AddContributionPayload) => {
  const savingsItem = state.savings.find((item) => item.id === payload.id);
  if (savingsItem) {
    savingsItem.contribution += payload.additionalContribution;
  }
};

const editObjectives = (state: State, payload: AddContributionPayload) => {
  const objectiveItem = state.objectives.find((item) => item.id === payload.id);
  if (objectiveItem) {
    objectiveItem.contribution += payload.additionalContribution;
  }
};

// DELETE

const deleteSavings = (state: State, payload: string) => {
  state.savings = state.savings.filter((saving) => saving.id !== payload);
};

const deleteObjectives = (state: State, payload: string) => {
  state.objectives = state.objectives.filter(
    (objective) => objective.id !== payload
  );
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
