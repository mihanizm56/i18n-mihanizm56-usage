import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./root-reducer";
import { translationMiddleware } from "@mihanizm56/i18n-react";
import { fetchLanguageKeysRequest } from "../../services/api/requests/fetch-language-keys";

export const createAppStore = () => {
  const composeMiddlewares = [
    translationMiddleware(fetchLanguageKeysRequest),
  ];

  const enhancers = composeWithDevTools(applyMiddleware(...composeMiddlewares));

  const store = createStore(rootReducer, enhancers);

  return store;
};
