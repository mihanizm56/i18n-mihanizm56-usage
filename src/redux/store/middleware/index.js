import {
  FETCH_LANG_ACTION,
  fetchDictionaryAction,
} from "../../modules/translation-module";

export const translationMiddleware = ({ url, request }) => (store) => (
  next
) => (action) => {
  if (action.type === FETCH_LANG_ACTION) {
    // console.log("SET_LANG_ACTION goes", action.payload);
    return fetchDictionaryAction({
      dispatch: store.dispatch,
      lang: action.payload,
      url,
      request,
    });
  }

  return next(action);
};
