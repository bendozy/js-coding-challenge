import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as schemeActions from '../actions/scheme';

import style from './css/Schemes.css';

export class Schemes extends React.Component {
  componentDidMount() {
    const { schemes, setScheme } = this.props;
    setScheme(schemes[0]);
  }

  changeOption = event => {
    this.props.setScheme(event.target.value);
  };

  render() {
    const { schemes, scheme } = this.props;

    const selectOptions = schemes.map(currentScheme => (
      <option
        key={currentScheme}
        value={currentScheme}
        selected={currentScheme === scheme ? true : undefined}
      >
        {currentScheme}
      </option>
    ));

    return (
      <div className={style.Schemes}>
        <label>
          <span className={style.SchemeTitle}>Scheme: </span>
          <select onChange={this.changeOption}>{selectOptions}</select>
        </label>
      </div>
    );
  }
}

export const mapStateToProps = state => ({ scheme: state.scheme });

export const mapDispatchToProps = dispatch => bindActionCreators(schemeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schemes);
