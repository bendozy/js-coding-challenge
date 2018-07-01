import React from 'react';
import PropTypes from 'prop-types';

import style from './css/ResponseBlock.css';

const ResponseBlock = ({ response }) => (
  <div className={style.CodeHighlight}>
    <pre className={style.CodeFormatter}>{JSON.stringify(response, null, 2)}</pre>
  </div>
);

ResponseBlock.defaultProps = {
  response: {},
};

ResponseBlock.propTypes = {
  response: PropTypes.any.isRequired,
};

export default ResponseBlock;
