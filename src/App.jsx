import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import AppLayout from "../AppLayout.jsx";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // ⬅️ this is your wrapper component with the auth listener
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/body",
          element: <Body />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
