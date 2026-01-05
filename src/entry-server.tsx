import React from "react";
import { RouterProvider } from "react-router";
import { renderToString } from "react-dom/server";
import router from "./router";

export function render() {
  return renderToString(<RouterProvider router={router} />);
}
