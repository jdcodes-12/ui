export default function AlertCard() {
  return <Card title='TDSC Alerts' />;
}

function Card({ title, subtile = '' }) {
  return (
    <div className='card w-50 rounded'>
      <div className='card-header flex flex-column'>
        <h2 className='fw-bold fs-4'>{title}</h2>
      </div>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center pb-4'>
          <FormInput
            type={'date'}
            label={'Start Date'}
            inputId={'alert-start-date'}
          />
          <FormInput
            type={'date'}
            label={'End Date'}
            inputId={'alert-end-date'}
          />
        </div>
        <TextArea />
      </div>
      <a href='#' class='btn btn-primary m-3 bg-black text-white fw-semibold'>
        Broadcast Alert
      </a>
    </div>
  );
}

function FormInput({ label, inputId, type = 'text' }) {
  return (
    <div className='d-flex flex-column w-100 pe-4'>
      <label htmlFor='alert-start-date'>{label}</label>
      <input
        id={inputId}
        type={type}
        className='
          rounded-end-2 
          rounded-start-2 
          border
        '
      />
    </div>
  );
}

function TextArea() {
  return (
    <div className='form-floating'>
      <textarea
        name=''
        id='alert-message-textarea'
        height='240px'
        className='form-control'
        placeholder='What do you want to say?'
      />
      <label htmlFor='alert-message-textarea'>Alert Message</label>
    </div>
  );
}
