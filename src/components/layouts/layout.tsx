import { Outlet } from 'react-router-dom';

import { Footer, Header } from './index';

export function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
