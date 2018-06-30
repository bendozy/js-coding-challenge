import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/auth';

import style from './Authorization.css';

class Authorization extends React.Component {
  state = {
    open: false,
    apiKey: '',
  };

  componentDidMount() {
    this.props.setAuthKey('123');
  }

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  setKey = key => {
    this.props.setAuthKey(key);
  };

  removeKey = () => {
    this.props.setAuthKey(null);
  };

  render() {
    const { authKey } = this.props;
    const { open } = this.state;

    return (
      <div className={style.Auth}>
        {!authKey && <button onClick={this.toggle}>Set Auth</button>}
        {authKey && <button onClick={this.removeKey}>Remove Auth</button>}
        {open && (
          <div className={style.AuthModal}>
            <div className={style.AuthModalContent}>
              <span className={style.Close} onClick={this.toggle}>
                &times;
              </span>
              <h4>Set API key</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ authKey: state.authKey });

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authorization);
