import type { SavingsOrObjectives, State, Transactions } from './state';

type AddContributionPayload = { id: string; additionalContribution: number };

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
  console.log(savingsItem, payload);
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

const deleteTransactions = (state: State, payload: string) => {
  state.transactions = state.transactions.filter(
    (transaction) => transaction.id !== payload
  );
};

const deleteSavings = (state: State, payload: string) => {
  state.savings = state.savings.filter((saving) => saving.id !== payload);
};

const deleteObjectives = (state: State, payload: string) => {
  state.objectives = state.objectives.filter(
    (objective) => objective.id !== payload
  );
};

const add = { addTransactions, addSavings, addObjectives };
const edit = { editSavings, editObjectives };
const del = { deleteTransactions, deleteSavings, deleteObjectives };

export const mutations = {
  ...add,
  ...edit,
  ...del,
};
