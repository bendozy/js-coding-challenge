import React from 'react';

import style from './Authorization.css';

class Authorization extends React.Component {
  render() {
    const { securityDefinitions } = this.props;

    return (
      <div className={style.Scheme}>
        {/* Authorization Component goes here */}
      </div>
    );
  }
}

export default Authorization;
