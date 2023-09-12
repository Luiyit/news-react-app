import { createBrowserRouter } from "react-router-dom";

import SettingsPage from '../pages/settings'
import HomePage from '../pages/home'

import RequireAuth from '../components/auth/RequiredAuth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "settings",
    element: <RequireAuth Component={SettingsPage} />,
  },
]);

export default router;