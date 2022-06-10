import { SELECT_TAB } from '../types/tabTypes';

export const selectTab = (tab) => ({
  type: SELECT_TAB,
  payload: tab,
});
