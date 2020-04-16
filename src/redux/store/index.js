import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./root-reducer";
import { translationMiddleware } from "./middleware";
import { fetchLanguageKeysRequest } from "../../services/api/requests/fetch-language-keys";

const LANG_URL = "http://127.0.0.1:8080/translation";

export const createAppStore = () => {
  const composeMiddlewares = [
    translationMiddleware({ url: LANG_URL, request: fetchLanguageKeysRequest }),
  ];

  const enhancers = composeWithDevTools(applyMiddleware(...composeMiddlewares));

  const store = createStore(rootReducer, enhancers);

  return store;
};
