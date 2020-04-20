import { ADD_USER_DATA, ADD_PRIVACY_DATA } from '../actions/action-types';

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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    case ADD_PRIVACY_DATA:
      return {
        ...state,
        privacyData: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
