import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import About from "./Components/About/About.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import ApiProvider from "./contexts/ApiProvider.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import PatientProfile from "./Components/PatientProfile/PatientProfile.jsx";
import FlashProvider from "./contexts/FlashProvider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <RegistrationPage /> },
  { path: "/profile", element: <PatientProfile /> },
  { path: "*", element: <Navigate to="/" /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlashProvider>
      <ApiProvider>
        <RouterProvider router={router} />
      </ApiProvider>
    </FlashProvider>
  </StrictMode>,
);
