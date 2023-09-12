import './App.css'

import AuthProvider from './providers/auth'
import NotifierProvider from './providers/notifier'
import { RouterProvider } from "react-router-dom";
import router from './helpers/routes';
import { StyleSheetManager } from 'styled-components';

const tagAttrs = [
  'textAlign', 
  'minWidth', 
  'paddingL', 
  'paddingT', 
  'paddingR', 
  'marginB', 
  'flexDirection', 
  'gridTemplateColumns', 
  'rowGap', 
  'columnGap'
];

function App() {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !tagAttrs.includes(prop)} >
      <AuthProvider>
        <NotifierProvider>
          <RouterProvider router={router} />
        </NotifierProvider>
      </AuthProvider>
    </StyleSheetManager>
  )
}

export default App
