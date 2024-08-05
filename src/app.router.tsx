import { createBrowserRouter } from 'react-router-dom'
import App from './App';

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);