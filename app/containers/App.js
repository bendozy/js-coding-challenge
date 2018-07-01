import React from 'react';
import PropTypes from 'prop-types';
import RefParser from 'json-schema-ref-parser';
import { connect } from 'react-redux';

import Schemes from './Schemes';
import Authorization from './Authorization';
import RequestPaths from './RequestPaths';

import style from './css/App.css';

export class App extends React.Component {
  state = {
    isParsing: true,
    schema: {},
  };

  componentDidMount() {
    RefParser.dereference(this.props.swagger)
      .then(schema => {
        this.setState({
          isParsing: false,
          schema,
        });
      })
      .catch(errors => {
        this.setState({
          isParsing: false,
          errors,
        });
      });
  }

  render() {
    const { schema, isParsing, errors } = this.state;

    if (isParsing) return <div>Parsing</div>;

    if (errors) return <div>Errors with file</div>;

    console.log(schema);

    return (
      <div className={style.App}>
        <h1 className={style.AppTitle}>{`${schema.info.title} ${schema.info.version}`}</h1>
        <div>{schema.info.description}</div>
        <div>Base URL: {schema.host}</div>
        <div className={style.Group}>
          <span className={style.GroupLeft}>
            <Schemes schemes={schema.schemes} />
          </span>
          <span className={style.GroupRight}>
            <Authorization securityDefinitions={schema.securityDefinitions} />
          </span>
        </div>
        <RequestPaths paths={schema.paths} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({ swagger: state.swagger });

App.propTypes = {
  swagger: PropTypes.shape({
    schemes: PropTypes.array.isRequired,
    paths: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps)(App);
