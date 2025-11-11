import "./App.css";
import Create from "./pages/Create/Create";
import Todos from "./pages/Todos/Todos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
    },
    {
      path: "/create",
      element: <Create />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
