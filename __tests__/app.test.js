import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConnectedApp, { App } from '../src/App';

describe('App', () => {
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

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders connected(SMART) component', () => {
    const container = shallow(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    expect(container).toHaveLength(1);
    expect(toJson(container)).toMatchSnapshot();
  });

  it('prop match with initial store state', () => {
    const container = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const appContainer = container.find(App);
    expect(appContainer.prop('state')).toEqual(initialState);
  });

  it('contains a BrowserRouter', () => {
    const container = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
    const routerContainer = container.find(BrowserRouter);
    expect(routerContainer.exists()).toBe(true);
  });
});
