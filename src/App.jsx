import React from "react";
import AppRouter from "@/routes";
import { ANT_CONFIG } from "@/configs";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider theme={ANT_CONFIG}>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;
