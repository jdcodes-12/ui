import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav/navbar.component';

export default function DesktopLayout() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <div className='row border vh-100'>
        <div
          className='
          border-top-0
          col-2 
          col-xl-1 
          border
        '
        >
          Sidebar
        </div>
        <div className='col'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
