export const fetchLanguageKeysRequest = ({ lang, url }) =>
  console.log("lang", lang) ||
  fetch(`${url}?lang=${lang}`).then((data) => data.json());
