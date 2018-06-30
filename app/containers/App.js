import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Schemes from './Schemes';
import Authorization from './Authorization';
import RequestPaths from './RequestPaths';

import style from './css/App.css';

export const App = ({ swagger }) => (
  <div className={style.App}>
    <h1 className={style.AppTitle}>{`${swagger.info.title} ${swagger.info.version}`}</h1>
    <div>{swagger.info.description}</div>
    <div>Base URL: {swagger.host}</div>
    <div className={style.Group}>
      <span className={style.GroupLeft}>
        <Schemes schemes={swagger.schemes} />
      </span>
      <span className={style.GroupRight}>
        <Authorization securityDefinitions={swagger.securityDefinitions} />
      </span>
    </div>
    <RequestPaths paths={swagger.paths} />
  </div>
);

export const mapStateToProps = state => ({ swagger: state.swagger });

App.propTypes = {
  setAuthKey: PropTypes.func.isRequired,
  swagger: PropTypes.shape({
    schemes: PropTypes.array.isRequired,
    paths: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps)(App);
