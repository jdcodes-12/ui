import Sidebar from '../../components/nav/sidebar.component';

export default function Alerts() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className='col-2 col-xl-2 border vh-100'>
          <Sidebar />
        </aside>
        <main className='col'>Content</main>
      </div>
    </div>
  );
}
