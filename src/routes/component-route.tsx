import { Button } from '@/components/library/button';
import { Drawer } from '@/components/library/drawer';
import { LandingPage } from '@/pages';
import { RouteObject } from 'react-router-dom';

const ComponentRoute: RouteObject[] = [
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: 'button',
    element: <Button />,
  },
  {
    path: 'drawer',
    element: <Drawer />,
  },
];

export default ComponentRoute;
