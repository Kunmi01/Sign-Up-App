import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConnectedCompletedSignUp, {
  CompletedSignUp
} from '../src/components/SignUp/components/CompletedSignUp';

describe('CompletedSignUp', () => {
  const initialState = {
    userData: {
      name: '',
      role: '',
      email: '',
      password: ''
    },
    privacyData: {
      trayUpdates: null,
      productEmails: null
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
          <ConnectedCompletedSignUp />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders connected(SMART) component', () => {
    expect(container.find(ConnectedCompletedSignUp).exists()).toBe(true);
    expect(toJson(container)).toMatchSnapshot();
  });

  it('prop match with initial store state', () => {
    const completedSignUpContainer = container.find(CompletedSignUp);
    expect(completedSignUpContainer.prop('state')).toEqual(initialState);
  });
});
