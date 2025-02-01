import { Outlet } from 'react-router-dom';

import { Footer, Header } from './index';

export const Layout = () => {
  return (
    <div className='dark:bg-black font-jakarta bg-white dark:text-[#d4d4d4] text-[#71717a]'>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
