import './App.css'

import AuthProvider from './providers/auth'
import { RouterProvider } from "react-router-dom";
import router from './helpers/routes';

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
