import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import "./globals/reset.scss";

import NuProvider from "./context/NuContext";

ReactDOM.render(
  <NuProvider>
    <React.StrictMode>
      <Landing />
    </React.StrictMode>
  </NuProvider>,
  document.getElementById("root")
);
