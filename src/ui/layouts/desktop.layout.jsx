import { Outlet } from 'react-router-dom';

export default function DesktopLayout() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>navbar</h1>
      </div>
      <div className='row border vh-100'>
        <div className='
          col-2 
          col-xl-1 
          border
        '>
          Sidebar
        </div>
        <div className='col'>
          <Outlet />
        </div>
      </div> 
    </div>
  );
}