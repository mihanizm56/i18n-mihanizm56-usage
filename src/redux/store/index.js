import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./root-reducer";
import { translationMiddleware } from "./middleware";

const LANG_URL = "http://127.0.0.1:8080/translation";

export const createAppStore = () => {
  const composeMiddlewares = [translationMiddleware(LANG_URL)];

  const enhancers = composeWithDevTools(applyMiddleware(...composeMiddlewares));

  const store = createStore(rootReducer, enhancers);

  return store;
};
