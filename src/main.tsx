import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Layout } from './components/layouts';
import { ThemeProvider } from './contexts/theme-contexts';
import './index.css';
import { Components, Home, PageNotFound } from './pages';
import ComponentRoute from './routes/component-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Components />,
        path: 'components',
        children: ComponentRoute,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
