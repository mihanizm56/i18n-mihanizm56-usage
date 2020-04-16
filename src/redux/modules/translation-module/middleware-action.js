import { setLangAction } from "./actions";

export const fetchDictionaryAction = async ({
  dispatch,
  lang,
  url,
  request,
}) => {
  try {
    const { data, error, errorText } = await request({ lang, url });

    if (error) {
      throw new Error(errorText);
    }

    dispatch(setLangAction(data));
  } catch (error) {
    console.error("error when fetch new dict", error);
  }
};
