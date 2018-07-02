import React from 'react';

import { paths } from '../../tests/swagger-sample';
import Modal from '../Modal';
import Button from '../Button';
import RequestMethod from '../RequestMethod';

describe('<RequestPath />', () => {
  it('mounts correctly', () => {
    const wrapper = shallow(<RequestMethod methodName="get" methodDetails={{}} />);

    expect(wrapper.state('open')).toBe(false);
    expect(wrapper.state('editingMode')).toBe(false);
  });

  it('opens up body on header click', () => {
    const wrapper = shallow(
      <RequestMethod methodDetails={paths['/todos'].post} methodName="post" pathName="/todos" />
    );

    wrapper.find('#MethodTitle').simulate('click');

    expect(wrapper.state('open')).toBe(true);
  });

  it('opens up modal on button click', () => {
    const wrapper = shallow(
      <RequestMethod
        methodDetails={paths['/todos/{todoId}'].get}
        methodName="get"
        pathName="/todos/{todoId}"
        params={paths['/todos/{todoId}'].parameters}
      />
    );

    wrapper.find('#MethodTitle').simulate('click');
    wrapper.find(Button).simulate('click');

    expect(wrapper.state('open')).toBe(true);
    expect(wrapper.state('editingMode')).toBe(true);
    expect(wrapper.find(Modal).length).toBe(1);
  });
});
