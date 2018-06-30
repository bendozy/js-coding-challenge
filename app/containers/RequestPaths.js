import React from 'react';
import PropTypes from 'prop-types';

import RequestPath from './RequestPath';

const RequestPaths = ({ paths }) => {
  const requestPaths = Object.keys(paths).map(pathsKey => (
    <RequestPath key={pathsKey} path={paths[pathsKey]} pathName={pathsKey} />
  ));

  return (
    <div>
      <h3>Request Paths</h3>
      {requestPaths}
    </div>
  );
};

RequestPaths.propTypes = {
  paths: PropTypes.object.isRequired,
};

export default RequestPaths;
