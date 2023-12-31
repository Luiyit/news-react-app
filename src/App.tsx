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
  'paddingB',
  'marginB', 
  'marginT', 
  'borderB',
  'flexDirection', 
  'gridTemplateColumns', 
  'rowGap', 
  'columnGap',
  'backgroundColor',
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
