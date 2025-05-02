import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/LogIn", element: <LogIn /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "*", element: "NotFound" },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
