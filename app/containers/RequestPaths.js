import React from 'react';

import style from './RequestPaths.css';

class RequestPaths extends React.Component {
  render() {
    const { paths } = this.props;

    return (
      <div className={style.RequestPaths}>
        {/* RequestPaths Component goes here */}
      </div>
    );
  }
}

export default RequestPaths;
