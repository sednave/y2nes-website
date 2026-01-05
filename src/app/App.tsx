import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Homepage from "./routes/Homepage/Homepage";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage";
import Characters from "./routes/Characters/Characters";
import Store from "./routes/Store/Store";
import Music from "./routes/Music/Music";
import About from "./routes/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
