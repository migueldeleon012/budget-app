import type { ActionTree } from 'vuex';
import type { State } from './state';

const user: ActionTree<State, State> = {
  login(ctx, payload) {
    ctx.commit('setUser', payload);
  },
  deleteUser(ctx) {
    ctx.commit('deleteUser');
  },
};

const goals: ActionTree<State, State> = {};
const savings: ActionTree<State, State> = {};
const transactions: ActionTree<State, State> = {};

export const actions = {
  ...user,
};
