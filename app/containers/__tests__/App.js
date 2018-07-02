import React from 'react';
import RefParser from 'json-schema-ref-parser';

import swagger from '../../tests/swagger-sample';
import { App, mapStateToProps } from '../App';
import Schemes from '../Schemes';
import RequestPaths from '../RequestPaths';
import Authorization from '../Authorization';

const setAuthKey = jest.fn();

describe('<App />', () => {
  it('renders a loading div', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(wrapper.find('#AppParsing').length).toBe(1);
    expect(wrapper.state().isParsing).toBe(true);
  });

  it('renders an error div on parse failure', done => {
    const dereferenceSpy = jest
      .spyOn(RefParser, 'dereference')
      .mockReturnValue(Promise.reject('someErrorData'));
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.state().isParsing).toBe(false);
      expect(wrapper.find('#AppError').length).toBe(1);

      dereferenceSpy.mockRestore();
      done();
    });
  });

  it('calls the componentDidMount function when it is created', () => {
    const componentDidMountSpy = jest.spyOn(App.prototype, 'componentDidMount');
    shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

    componentDidMountSpy.mockRestore();
  });

  it('renders a <h1> tag', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.state().isParsing).toBe(false);
      expect(wrapper.find('h1').length).toBe(1);
    });
  });

  it('renders a <Schemes /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.state().isParsing).toBe(false);
      expect(wrapper.find(Schemes).length).toBe(1);
    });
  });

  it('renders a <RequestPaths /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.state().isParsing).toBe(false);
      expect(wrapper.find(RequestPaths).length).toBe(1);
    });
  });

  it('renders a <Authorization /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.state().isParsing).toBe(false);
      expect(wrapper.find(Authorization).length).toBe(1);
    });
  });

  it('check for the correct scheme value', () => {
    expect(mapStateToProps({ swagger: { scheme: 'test' } }).swagger.scheme).toBe('test');
  });
});
