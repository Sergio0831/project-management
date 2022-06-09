const Alert = ({ text }) => {
  return (
    <div class='alert alert-danger alert-dismissible fade show' role='alert'>
      <strong>{text}</strong>
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
      ></button>
    </div>
  );
};
export default Alert;
