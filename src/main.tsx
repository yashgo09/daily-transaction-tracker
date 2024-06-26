import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./firebase.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.js";

// Importing fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ErrorPage from "./error-page.js";
import Login from "./routes/Login.js";
import SignUp from "./routes/SignUp.js";
import Dashboard from "./routes/Dashboard.js";

export const AuthContext = createContext<unknown>(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
