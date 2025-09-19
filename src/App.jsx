import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your page components
import { Register } from "./pages/Register"; // You'll create this file
import { Login } from "./pages/Login"; // You'll create this file
import { Welcome } from "./pages/Welcome";
import AppLayout from "./component/layout/AppLayout";
import AccountSettings from "./pages/AccountSettings";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/account-settings",
          element: <AccountSettings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
