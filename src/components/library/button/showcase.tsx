import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/internal/breadcrumb';
import { Link } from 'react-router-dom';

import { Colors, Usage } from './index';

export const ButtonShowcase = () => {
  return (
    <div>
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to='/components'>Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='font-semibold mb-2 font-jakarta text-3xl'>
        Button
      </h1>
      <p className='sm:text-lg max-w-2xl text-text'>
        Seamlessly add interactive elements without the hassle. Built
        for speed, accessibility, and precision—just place them,
        customize, and let users engage effortlessly.
      </p>

      <Usage />
      <Colors />
    </div>
  );
};
