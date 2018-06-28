import React from 'react';

import style from './ModelDefinitions.css';

class ModelDefinitions extends React.Component {
  render() {
    const { definitions } = this.props;

    return (
      <div className={style.ModelDefinitions}>
        {/* ModelDefinitions Component goes here */}
      </div>
    );
  }
}

export default ModelDefinitions;
