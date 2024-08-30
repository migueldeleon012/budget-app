import { createStore } from 'vuex/types/index.js';

export default createStore({
  state() {
    return {
      income: 0,
      spent: 0,
      moneyLeft: 0,
      objectives: [],
      savings: [],
      transactions: [],
    };
  },
});
