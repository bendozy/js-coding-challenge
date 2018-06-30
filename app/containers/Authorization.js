import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from './Modal';
import * as authActions from '../actions/auth';

import style from './css/Authorization.css';

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

  close = () => {
    this.setState({ open: false });
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
        {!authKey && (
          <button className={style.AuthButton} onClick={this.toggle}>
            Set Auth
          </button>
        )}
        {authKey && (
          <button className={style.AuthButton} onClick={this.removeKey}>
            Remove Auth
          </button>
        )}
        <Modal title="Authorization" close={this.close} open={open}>
          <h4>Authorization goes here</h4>
        </Modal>
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
