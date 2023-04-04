import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ul>
    </nav>
  );
};

export default SharedLayout;
