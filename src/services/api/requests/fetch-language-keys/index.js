export const fetchLanguageKeysRequest = (lang) =>
  fetch(`http://127.0.0.1:8080/I18N/getTr?lang=${lang}`).then((data) => data.json());
