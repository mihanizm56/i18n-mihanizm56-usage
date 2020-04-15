import { SET_LANG_ACTION } from "./actions";

const initialState = {
  data: {},
};

const translationStorage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANG_ACTION:
      return { ...state, data: { ...payload } };

    default:
      return state;
  }
};

export default translationStorage;
