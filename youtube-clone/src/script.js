import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
