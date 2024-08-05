import { Nav, NavItem, NavLink } from 'reactstrap';
export default function Navbar() {
  return (
    <div className='row'>
      <div className='py-0 d-flex align-items-stretch'>
        <div className='d-none d-sm-flex flex-column align-items-center justify-content-center border border-top-0 border-bottom-0 border-start-0 pe-2 text-secondary col-2 col-xl-1'>
          <span className='fst-italic'>Welcome,</span>
          <span className='font-5'>Doe, John CONT</span>
        </div>
        <Nav className='d-flex row-gap-2 py-1'>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              Chemistry I Courses
            </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              Chemistry II Courses
            </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              Physics I Courses
            </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              Physics II Courses
            </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              AP Chemistry Courses
            </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink className='py-0 text-black' href='#'>
              AP Physics Courses
            </NavLink>
          </NavItem>
        </Nav>
        <div className='d-flex align-items-center text-secondary ms-auto border border-top-0 border-bottom-0 border-end-0 ps-2 h-100'>
          V 1.1.4
        </div>
      </div>
    </div>
  );
}
