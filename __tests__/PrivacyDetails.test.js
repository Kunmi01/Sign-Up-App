import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConnectedPrivacyDetails, {
  PrivacyDetails
} from '../src/components/SignUp/components/PrivacyDetails';
import { addPrivacyData } from '../src/redux/actions';

describe('PrivacyDetails', () => {
  const initialState = {
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
    store.dispatch = jest.fn();
    container = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedPrivacyDetails />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders connected(SMART) component', () => {
    expect(container.find(ConnectedPrivacyDetails).exists()).toBe(true);
    expect(toJson(container)).toMatchSnapshot();
  });

  it('prop match with initial store state', () => {
    const privacyDetailsContainer = container.find(PrivacyDetails);
    expect(privacyDetailsContainer.prop('privacyData')).toEqual(
      initialState.privacyData
    );
  });

  it('can submit form', () => {
    const privacyDetailsContainer = container.find(PrivacyDetails);
    renderer.act(() => {
      privacyDetailsContainer.find('input#tray-updates').simulate('change', {
        target: { checked: true }
      });
      privacyDetailsContainer.find('button[type="submit"]').simulate('submit');
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      addPrivacyData({
        trayUpdates: true,
        productEmails: false
      })
    );
  });
});
