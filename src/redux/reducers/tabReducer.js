import { SELECT_TAB } from '../types/tabTypes';

const initialState = {
  selectedTab: 0,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};

export default tabReducer;
