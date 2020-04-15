import { combineReducers } from "redux";
import translationStorage from "../modules/translation-module";

export const rootReducer = combineReducers({
  translationStorage,
});
