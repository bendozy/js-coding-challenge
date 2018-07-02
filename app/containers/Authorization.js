import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from './Modal';
import Button from './Button';
import * as authActions from '../actions/auth';

import style from './css/Authorization.css';

class Authorization extends React.Component {
  state = {
    open: false,
    apiKey: '',
  };

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  close = () => {
    this.setState({ open: false }, () => this.props.setAuthKey('123'));
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
        {/* {!authKey && (
          <Button className={style.AuthButton} onClick={this.toggle}>
            Set Auth
          </Button>
        )}
        {authKey && (
          <Button className={style.AuthButton} onClick={this.removeKey}>
            Remove Auth
          </Button>
        )}
        <Modal title="Authorization" close={this.close} open={open}>
          <h4>Authorization goes here</h4>
        </Modal> */}
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
