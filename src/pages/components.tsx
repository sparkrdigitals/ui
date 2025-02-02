import { Outlet } from 'react-router-dom';

export const Components = () => {
  return (
    <div>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

const Sidebar = () => {
  return <div>sidebar</div>;
};

export const LandingPage = () => {
  return <div>sidebar</div>;
};
