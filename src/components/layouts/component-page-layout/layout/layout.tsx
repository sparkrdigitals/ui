import { Outlet } from 'react-router-dom';

import { Sidebar } from '../sidebar';

export const Layout = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-8 container mt-10'>
      <div className='border-solid border-r border-black/15 dark:border-white/15'>
        <Sidebar />
      </div>

      <main className='pt-10'>
        <Outlet />
      </main>
    </div>
  );
};
