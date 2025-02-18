import { Layout } from '@/components/layouts';
import {
  Component,
  Figma,
  Home,
  PageNotFound,
  Templates,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

import ComponentRoute from './component-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Component />,
        path: 'components',
        children: ComponentRoute,
      },
      {
        element: <Figma />,
        path: 'figma',
      },
      {
        element: <Templates />,
        path: 'templates',
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
