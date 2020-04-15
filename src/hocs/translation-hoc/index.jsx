import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getTranslationsDict,
  fetchLangAction,
} from "../../redux/modules/translation-module";

export const ConnectedWrapperFunction = (Component) =>
  class WrappedContainer extends PureComponent {
    componentDidUpdate() {
      console.log("TranslationHOC updated");
    }

    translate = (key) => this.props.translatedList[key] || "";

    fetchLang = (lang) => this.props.fetchLang(lang);

    render = () => (
      <Component
        changeLocale={this.fetchLang}
        i18n={this.translate}
        test={this.props.translatedList}
      />
    );
  };

const mapStateToProps = (store) => ({
  translatedList: getTranslationsDict(store),
});

export const TranslationHOC = (Component) =>
  connect(mapStateToProps, {
    fetchLang: fetchLangAction,
  })(ConnectedWrapperFunction(Component));
