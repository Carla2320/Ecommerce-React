import React, { Suspense ,useState} from "react";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { UserContext } from "../src/hooks/UseContext";
export const App = () => {

  const [color, setColor] = useState(true)
  return (
    <UserContext.Provider value={{
      color,
      setColor
  }}>
    <Suspense fallback="loading">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Suspense>
    </UserContext.Provider>
  );
};
