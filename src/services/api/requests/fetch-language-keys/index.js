export const fetchLanguageKeysRequest = ({ lang, url }) =>
  fetch(`${url}?lang=${lang}`).then((data) => data.json());
