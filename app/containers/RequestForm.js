import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ResponseBlock from './ResponseBlock';
import Button from './Button';
import * as authActions from '../actions/auth';

import style from './css/RequestForm.css';

class RequestForm extends React.Component {
  state = {
    formData: {},
    errors: {},
    response: {},
    loading: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { parameters } = nextProps;
    const { formData } = prevState;

    const bodyParam = parameters.find(parameter => parameter.name === 'body');

    if (bodyParam && bodyParam.schema && bodyParam.schema.example) {
      formData.body = JSON.stringify(bodyParam.schema.example, null, 2);
    }

    return { formData };
  }

  onChange = event => {
    const { formData } = this.state;

    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({ loading: true, response: 'Sending Request' }, () => this.validateInputs());
  };

  validateInputs = () => {
    let isValid = true;
    const { formData } = this.state;
    const { parameters } = this.props;
    const errors = {};

    // parameters.map(pa)

    if (formData.body) {
      console.log('hasbody');

      try {
        formData.body = JSON.parse(formData.body);
        console.log(formData.body);
      } catch (err) {
        isValid = false;
        errors.body = err;
      }
    }

    if (isValid) {
      this.setState({ formData }, () => this.sendRequest());
    } else {
      this.setState({ loading: false, response: errors });
    }
  };

  sendRequest = () => {
    const { methodName: method } = this.props;
    const { formData } = this.state;

    // Server does not allow CORS so I am using a proxy
    const options = {
      method,
      url: `https://cors-anywhere.herokuapp.com/${this.getRequestUrl()}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };

    if (formData.body) {
      options.data = formData.body;
    }

    axios(options)
      .then(response => {
        this.setState({ response: response.data, loading: false });
        // Save Request
      })
      .catch(error => {
        this.setState({ response: error.response.data, loading: false });
      });
  };

  getRequestUrl = () => {
    const { scheme, baseUrl, pathName, parameters } = this.props;
    const { formData } = this.state;
    const protocol = scheme ? `${scheme}://` : '';
    let url = pathName;
    let queryParams = `?apiKey=${123}`;

    for (let index = 0; index < parameters.length; index++) {
      if (!queryParams && parameters[index].in === 'query') {
        queryParams += '?';
      }

      if (queryParams && parameters[index].in === 'query' && formData[parameters[index].name]) {
        queryParams += '&';
      }

      if (parameters[index].in === 'query' && formData[parameters[index].name]) {
        queryParams += `${parameters[index].name}=${formData[parameters[index].name]}`;
      }

      if (parameters[index].in === 'path' && formData[parameters[index].name]) {
        const reg = new RegExp('\\{\\s*?' + 'todoId' + '.*?\\}(?=\\s*?(\\/|$))', 'gi');
        url = url.replace(reg, formData[parameters[index].name]);
      }
    }

    return `${protocol}${baseUrl}${url}${queryParams}`;
  };

  render() {
    const { methodName, parameters } = this.props;
    const { response, formData, loading } = this.state;

    const formElements = parameters.map(parameter => {
      if (parameter.name === 'body') {
        return (
          <div key={parameter.name} className={style.FormGroup}>
            <label htmlFor={parameter.name}>{parameter.name}:</label>
            <textarea rows="10" cols="50" className={style.formElement} required>
              {formData[parameter.name]}
            </textarea>
          </div>
        );
      }

      switch (parameter.type) {
        case 'integer':
        case 'number':
          return (
            <div key={parameter.name} className={style.FormGroup}>
              <label htmlFor={parameter.name}>{parameter.name}:</label>
              <input
                required={parameter.required ? true : undefined}
                type="number"
                value={formData[parameter.name] || ''}
                name={parameter.name}
                placeholder={parameter.name}
                min={parameter.min}
                max={parameter.max}
                onChange={this.onChange}
                className={style.formElement}
              />
            </div>
          );
        case 'string':
          return (
            <div key={parameter.name} className={style.FormGroup}>
              <label htmlFor={parameter.name}>{parameter.name}:</label>
              <input
                required={parameter.required ? true : undefined}
                name={parameter.name}
                placeholder={parameter.name}
                value={formData[parameter.name] || ''}
                onChange={this.onChange}
                className={style.formElement}
              />
            </div>
          );
        default:
          return null;
      }
      return 'parameter';
    });

    return (
      <div className={style.Form}>
        <div>Request Method: {methodName.toUpperCase()}</div>
        <div>Request URL: {this.getRequestUrl()}</div>
        <form onSubmit={this.onSubmit}>
          {formElements}
          <div className={style.FormSubmit}>
            <Button disabled={loading} type="submit" className={style.FormButton} full>
              Send Request
            </Button>
          </div>
        </form>
        <h4>Response body</h4>
        <ResponseBlock response={response} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authKey: state.authKey,
  scheme: state.scheme,
  baseUrl: state.swagger.host,
});

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestForm);
