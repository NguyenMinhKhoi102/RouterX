import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/layouts/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
