import React from 'react';
import RequestPath from '../components/RequestPath';

import style from './RequestPaths.css';

const RequestPaths = ({ paths }) => {
  const requestPaths = Object.keys(paths).map(pathsKey => (
    <RequestPath key={pathsKey} path={paths[pathsKey]} pathName={pathsKey} />
  ));

  return (
    <div className={style.RequestPaths}>
      <h3>Request Paths</h3>
      {requestPaths}
    </div>
  );
};

export default RequestPaths;
