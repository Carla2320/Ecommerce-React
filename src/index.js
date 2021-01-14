import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { I18nextProvider } from "react-i18next";
import reducer, { initialState } from "./actions/reducer";
import { StateProvider } from "./reducers/StateProvider";
import i18next from "i18next";
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    es: {
      common: common_es, // 'common' is our custom namespace
    },
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />,
    </StateProvider>
  </I18nextProvider>,

  document.getElementById("root")
);
