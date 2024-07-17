import { ConfigProvider } from "antd";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ANT_CONFIG } from "@/configs";
import router from "@/routes";
import { THEME_CONFIG, GlobalStyles } from "./styles";

const App = () => {
  return (
    <ConfigProvider theme={ANT_CONFIG}>
      <ThemeProvider theme={THEME_CONFIG}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
