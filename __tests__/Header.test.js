import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConnectedHeader, { Header } from '../src/components/Header';

describe('Header', () => {
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
          <ConnectedHeader />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders connected(SMART) component', () => {
    expect(container.find(ConnectedHeader).exists()).toBe(true);
    expect(toJson(container)).toMatchSnapshot();
  });

  it('prop match with initial store state', () => {
    const headerContainer = container.find(Header);
    expect(headerContainer.prop('state')).toEqual(initialState);
  });

  it('contains sign up navigation links', () => {
    const headerContainer = container.find(Header);

    expect(headerContainer.find({ to: '/user' })).toHaveLength(1);
    expect(headerContainer.find({ to: '/privacy' })).toHaveLength(1);
    expect(headerContainer.find({ to: '/done' })).toHaveLength(1);
  });
});
