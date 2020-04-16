import React, { memo, useEffect } from "react";
import { TranslationRenderProps } from "@mihanizm56/i18n-react";

export const CardRenderProps = memo(({ i18n }) => {
  useEffect(() => {
    console.log("UPD CardRenderProps");
  });

  return (
    <TranslationRenderProps>
      {({ i18n }) => <p>{i18n("card-text")}</p>}
    </TranslationRenderProps>
  );
});
