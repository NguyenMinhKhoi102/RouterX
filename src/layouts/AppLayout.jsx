import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default AppLayout;
