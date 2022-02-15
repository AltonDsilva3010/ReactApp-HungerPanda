import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const WithNav = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default WithNav;
