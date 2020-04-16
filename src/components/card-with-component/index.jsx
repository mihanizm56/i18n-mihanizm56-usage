import React, { memo, useEffect } from "react";
import { TranslationComponent } from "@mihanizm56/i18n-react";

export const CardWithComponent = memo(() => {
  useEffect(() => {
    console.log("UPD CardWithComponent");
  });

  return (
    <p>
      <TranslationComponent tKey="card-text" />
    </p>
  );
});
