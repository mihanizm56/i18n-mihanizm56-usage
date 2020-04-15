import React, { memo, useEffect } from "react";
import { TranslationHOC } from "../../hocs/translation-hoc";

export const TranslatedCard = memo(({ i18n }) => {
  useEffect(() => {
    console.log("UPD TranslatedCard");
  }); // eslint-disable-line

  return (
    <div>
      <p>{i18n("card-text")}</p>
    </div>
  );
});

export const Card = TranslationHOC(TranslatedCard);
