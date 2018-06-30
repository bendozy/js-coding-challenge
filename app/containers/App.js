import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Schemes from '../components/Schemes';
import Authorization from '../components/Authorization';
import RequestPaths from '../containers/RequestPaths';

import style from './App.css';

export const App = ({ swagger }) => (
  <div className={style.App}>
    <h1 className={style.AppTitle}>{`${swagger.info.title} ${swagger.info.version}`}</h1>
    <div>{swagger.info.description}</div>
    <div>Base URL: {swagger.host}</div>
    <Schemes schemes={swagger.schemes} />
    <Authorization securityDefinitions={swagger.securityDefinitions} />
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
