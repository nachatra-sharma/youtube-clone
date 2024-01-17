import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
