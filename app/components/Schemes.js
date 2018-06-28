import React from 'react';

import style from './Schemes.css';

class Schemes extends React.Component {
  render() {
    const { schemes } = this.props;

    return (
      <div className={style.Scheme}>
        {/* Schemes Component goes here */}
      </div>
    );
  }
}

export default Schemes;
