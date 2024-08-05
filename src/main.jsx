import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { APP_ROUTER } from './app.router';
import { RouterProvider } from 'react-router-dom';
import './ui/styles/styles.scss';
import './ui/styles/custom/custom.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={APP_ROUTER} />
  </StrictMode>,
);
