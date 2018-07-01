import React from 'react';
import RequestMethod from './RequestMethod';

import style from './css/RequestPath.css';

const RequestPath = ({ path, pathName }) => {
  const requestMethods = Object.keys(path)
    .filter(method => {
      const httpMethods = ['get', 'put', 'post', 'patch', 'delete', 'head', 'options', 'trace'];
      return httpMethods.indexOf(method) !== -1;
    })
    .map(method => (
      <RequestMethod
        key={method}
        methodDetails={path[method]}
        methodName={method}
        pathName={pathName}
        params={path.parameters}
      />
    ));

  return <div className={style.RequestPaths}>{requestMethods}</div>;
};

export default RequestPath;
