import { Outlet } from 'react-router-dom';

export default function DesktopLayout() {
  return (
    <div>
      <div className='bg-secondary-subtle'>
        <h1>Navbar</h1>
      </div>
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
}
