import type { SavingsOrObjectives, State, Transactions } from './state';

const addTransactions = (state: State, payload: Transactions) => {
  state.transactions.push(payload);
};

const addSavings = (state: State, payload: SavingsOrObjectives) => {
  state.savings.push(payload);
};

const addObjectives = (state: State, payload: SavingsOrObjectives) => {
  state.objectives.push(payload);
};

const add = { addTransactions, addSavings, addObjectives };

export const mutations = {
  ...add,
};
