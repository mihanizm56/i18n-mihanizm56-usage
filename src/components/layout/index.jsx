import React, { memo } from "react";
import { TranslationHOC } from "../../hocs/translation-hoc";
import { Card } from "../card";
import { useEffect } from "react";

const TranslatedLayout = memo(({ changeLocale }) => {
  useEffect(() => {
    changeLocale("ru");
  }, []); // eslint-disable-line

  return (
    <div>
      <Card />
      <button onClick={() => changeLocale("en")}>Update lang to en</button>
      <button onClick={() => changeLocale("ru")}>Update lang to ru</button>
    </div>
  );
});

export const Layout = TranslationHOC(TranslatedLayout);
