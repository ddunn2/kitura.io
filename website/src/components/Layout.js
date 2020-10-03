import React from "react";
import Header from "./Header";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
