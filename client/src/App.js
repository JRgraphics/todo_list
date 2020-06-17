import React from "react";

import "./App.css";
import Itemlist from "./components/Itemlist/Itemlist";

import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import AddItem from "./components/AddItem/AddItem";

function App() {
  return (
    <Provider store={store}>
      <div className="App col-10 offset-1">
        <Header />
        <AddItem />
        <Itemlist />
      </div>
    </Provider>
  );
}

export default App;
