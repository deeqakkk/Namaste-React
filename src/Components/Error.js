import { useRouteError } from 'react-router-dom';
const Error = () => {
  const err = useRouteError();

  return (
    <div className='error-page'>
      <h1>Error Page</h1>
      <h2>{err.status + ':' + err.statusText}</h2>
    </div>
  );
};

export default Error;
