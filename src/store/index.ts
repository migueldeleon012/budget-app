import type { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { state, type State } from './state';
import { mutations } from './mutations';

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state,
  mutations,
});
