import React from "react";
import Header from "./Header";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout--container">{children}</div>
    </>
  );
};

export default Layout;
