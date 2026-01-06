import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { StrictMode } from "react";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
