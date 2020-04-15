import { fetchLanguageKeysRequest } from "../../../services/api/requests/fetch-language-keys";
import { setLangAction } from "./actions";

export const fetchDictionaryAction = async ({ dispatch, lang, url }) => {
  const { data } = await fetchLanguageKeysRequest({ lang, url });

  //   console.log("dictionary", data);

  dispatch(setLangAction(data));
};
