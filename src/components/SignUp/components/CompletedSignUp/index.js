import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './styles.scss';

const CompletedSignUp = ({ state }) => {
  // eslint-disable-next-line no-console
  console.log('FORM DATA:', JSON.stringify(state, null, 4));

  const { userData } = state;
  const userCompleted = Object.keys(userData).every(key => userData[key]);

  return userCompleted ? (
    <div className="completed-sign-up">
      <div className="completed-sign-up__wrapper">
        <h3 className="completed-sign-up__header">Completed</h3>
        <p className="completed-sign-up__message">
          Please verify your email address, you should have received an email
          from us already
        </p>
      </div>
    </div>
  ) : (
    <Redirect to="/user" />
  );
};

CompletedSignUp.propTypes = {
  state: PropTypes.shape({
    userData: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string
    }),
    privacyData: PropTypes.shape({
      trayUpdates: PropTypes.bool,
      productEmails: PropTypes.bool
    })
  }).isRequired
};

export default connect(state => ({ state }))(CompletedSignUp);
