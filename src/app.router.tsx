import { createBrowserRouter } from 'react-router-dom';
import App from './app.entry';
import Fundamentals from './ui/sections/fundamentals/fundamentals.section';
import Alerts from './ui/sections/alerts/alerts.section';

export const APP_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Alerts />,
      },
      {
        path: 'fundamentals',
        element: <Fundamentals />,
      },
    ],
  },
]);
