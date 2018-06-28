import React from 'react';
import { connect } from 'react-redux';
import Schemes from '../components/Schemes';
import Authorization from '../components/Authorization';
import RequestPaths from '../containers/RequestPaths';
import ModelDefinitions from '../containers/ModelDefinitions';

import style from './App.css';

class App extends React.Component {
  render() {
    const { swagger } = this.props;

    return (
      <div className={style.App}>
        <h1>Request Maker</h1>
        <div>{`${swagger.info.title} ${swagger.info.version}`}</div>
        <div>{swagger.info.description}</div>
        <div>Base URL: {swagger.host}</div>
        <Schemes schemes={swagger.schemes} />
        <Authorization securityDefinitions={swagger.securityDefinitions} />
        <RequestPaths paths={swagger.paths} />
        <ModelDefinitions definitions={swagger.definitions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

export default connect(mapStateToProps)(App);
