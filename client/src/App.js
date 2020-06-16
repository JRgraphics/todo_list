import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Itemlist from "./components/Itemlist/Itemlist";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Itemlist />
      </div>
    </Provider>
  );
}

export default App;
