import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../index';

export const Layout = () => {
  return (
    <div className='bg-background text-foreground'>
      <Header />

      <main className='pt-8'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
