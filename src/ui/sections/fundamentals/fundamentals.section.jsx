import Sidebar from '../../components/nav/sidebar.component';
import { FUNDAMENTALS_SIDEBAR } from '../../../config/sidebars/fundamentals-sidebar.config';

export default function Fundamentals() {
  return (
    <div className='d-flex border'>
      <Sidebar contents={FUNDAMENTALS_SIDEBAR} />
      <div className='col-10'>
        <h2>Content</h2>
      </div>
    </div>
  );
}