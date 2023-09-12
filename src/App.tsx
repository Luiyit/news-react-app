import './App.css'

import AuthProvider from './providers/auth'
import { RouterProvider } from "react-router-dom";
import router from './helpers/routes';
import { StyleSheetManager } from 'styled-components';

function App() {

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StyleSheetManager>
  )
}

export default App
