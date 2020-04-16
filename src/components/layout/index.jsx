import React, { memo, useEffect } from "react";
import { fetchLangAction } from "@mihanizm56/i18n-react";
import { connect } from "react-redux";
import { CardRenderProps } from "../card-render-props";
import { CardHOC } from "../card-hoc";
import { CardWithComponent } from "../card-with-component";

const WrappedLayout = memo(({ setLang }) => {
  useEffect(() => {
    console.log("Layout rerenders");

    setLang("ru");
  }); // eslint-disable-line

  return (
    <div>
      <CardRenderProps />
      <CardHOC />
      <CardWithComponent />

      <button onClick={() => setLang("en")}>Update lang to en</button>
      <button onClick={() => setLang("ru")}>Update lang to ru</button>
    </div>
  );
});

export const Layout = connect(null, { setLang: fetchLangAction })(
  WrappedLayout
);
