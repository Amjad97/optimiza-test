import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CountriesTabel from "./components/CountriesTabel";

function App() {
  return (
    <Provider store={store}>
      <CountriesTabel />
    </Provider>
  );
}

export default App;
