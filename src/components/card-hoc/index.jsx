import React, { memo, useEffect } from "react";
import { TranslationHOC } from "@mihanizm56/i18n-react";

export const TranslatedCard = memo(({ i18n }) => {
  useEffect(() => {
    console.log("UPD CardHOC");
  });

  return <div>{i18n("card-text")}</div>;
});

export const CardHOC = TranslationHOC(TranslatedCard);
