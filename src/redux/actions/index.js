import { ADD_USER_DATA, ADD_PRIVACY_DATA } from './action-types';

export const addUserData = payload => {
  return { type: ADD_USER_DATA, payload };
};

export const addPrivacyData = payload => {
  return { type: ADD_PRIVACY_DATA, payload };
};
