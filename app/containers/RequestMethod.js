import React from 'react';

import Modal from './Modal';
import Button from './Button';
import RequestForm from './RequestForm';

import style from './css/RequestMethod.css';

class RequestMethod extends React.Component {
  state = {
    open: false,
    editingMode: false,
  };

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  toggleEditMode = () => {
    this.setState(({ editingMode }) => ({ editingMode: !editingMode }));
  };

  render() {
    const { methodName, pathName, methodDetails, params } = this.props;
    const { open, editingMode } = this.state;
    let parameters = [];
    let parameterBody = [];
    const responseBody = [];

    if (params) {
      parameters = parameters.concat(params);
    }

    if (methodDetails.parameters) {
      parameters = parameters.concat(methodDetails.parameters);
    }

    parameterBody = parameters.map(param => (
      <tr key={param.name}>
        <td>{param.name}</td>
        <td>
          {param.type} {param.required ? '*' : ''}
        </td>
        <td>{param.in}</td>
        <td>{param.description}</td>
      </tr>
    ));

    if (methodDetails.responses) {
      responseBody.push(
        Object.keys(methodDetails.responses).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>desc</td>
          </tr>
        ))
      );
    }

    return (
      <div className={[style.RequestMethod, style[`RequestMethod-${methodName}`]].join(' ')}>
        <div className={style.Title} onClick={this.toggle}>
          {methodName.toUpperCase()}
          <span className={style.TitleSummary}>{pathName}</span> - {methodDetails.summary}
        </div>
        {open && (
          <div>
            <div className={style.SectionHeader}>
              <div className={style.TabHeader}>
                <h4>Parameters</h4>
              </div>
              <div className={style.Tryout}>
                <Button onClick={this.toggleEditMode}>Try Out</Button>
              </div>
            </div>
            <div className={[style.Content, style[`Content-${methodName}`]].join(' ')}>
              <table className={style.Table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>In</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>{parameterBody}</tbody>
              </table>
            </div>
            <div className={style.SectionHeader}>
              <div className={style.TabHeader}>
                <h4>Responses</h4>
              </div>
            </div>
            <div className={[style.Content, style[`Content-${methodName}`]].join(' ')}>
              <table className={style.Table}>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>{responseBody}</tbody>
              </table>
            </div>
            <Modal title="Send API Request" close={this.toggleEditMode} open={editingMode}>
              <RequestForm parameters={parameters} methodName={methodName} pathName={pathName} />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default RequestMethod;
