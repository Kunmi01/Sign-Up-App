import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConnectedUserDetails, {
  EnhancedForm
} from '../src/components/SignUp/components/UserDetails';

describe('UserDetails', () => {
  const initialState = {
    userData: {
      name: '',
      role: '',
      email: '',
      password: ''
    }
  };
  const mockStore = configureStore();
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedUserDetails />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders connected(SMART) component', () => {
    expect(container.find(ConnectedUserDetails).exists()).toBe(true);
    expect(toJson(container)).toMatchSnapshot();
  });

  it('prop match with initial store state', () => {
    const enhancedFormContainer = container.find(EnhancedForm);
    expect(enhancedFormContainer.prop('userData')).toEqual(
      initialState.userData
    );
  });
});
