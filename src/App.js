import React, { Suspense } from "react";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Suspense fallback="loading">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Suspense>
  );
};
