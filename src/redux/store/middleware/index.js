import {
  FETCH_LANG_ACTION,
  fetchDictionaryAction,
} from "../../modules/translation-module";

export const translationMiddleware = (langUrl) => (store) => (next) => (
  action
) => {
  if (action.type === FETCH_LANG_ACTION) {
    // console.log("SET_LANG_ACTION goes", action.payload);
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      url: langUrl,
    });
  }

  return next(action);
};
