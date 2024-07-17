import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFound from "@/pages/NotFound";
import TestPage from "@/pages/Test";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "service",
        element: <AboutPage />,
      },
      {
        path: "project",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes, { basename: "/v1" });

export default router;
