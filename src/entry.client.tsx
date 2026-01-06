import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import routes from "./routes";
import "./App.css";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </StrictMode>
);
