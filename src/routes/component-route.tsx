import { LandingPage } from '@/components/layouts';
import { ButtonShowcase } from '@/components/library/button';
import { Drawer } from '@/components/library/drawer';
import { RouteObject } from 'react-router-dom';

const ComponentRoute: RouteObject[] = [
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: 'button',
    element: <ButtonShowcase />,
  },
  {
    path: 'drawer',
    element: <Drawer />,
  },
];

export default ComponentRoute;
