import { NavLink as BSNavLink, NavItem } from 'reactstrap';

export default function IconLink({ link }) {

  const { icon, label } = link;

  return (
    <NavItem 
      style={{ cusror: 'pointer' }}  
      className='
        d-flex 
        py-3 px-3 border 
        align-items-center
      '>
      {icon}
      <BSNavLink 
        href={''}
        className='
          ps-3
        '
      >
        {label}
      </BSNavLink>
    </NavItem>
  );
}
