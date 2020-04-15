import { createSelector } from "reselect";

const tranlationState = (state) => state.translationStorage;

export const getTranslationsDict = createSelector([tranlationState], (state) =>
  state ? state.data : {}
);
