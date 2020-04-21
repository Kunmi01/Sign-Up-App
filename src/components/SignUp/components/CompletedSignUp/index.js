import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';

/**
 * CompletedSignUp component - displays the sign up completion message to the user and logs the
 * resulting state of the redux store to the browser console.
 */
export const CompletedSignUp = ({ state }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('FORM DATA:', JSON.stringify(state, null, 2));
  });

  return (
    <div className="completed-sign-up">
      <div className="completed-sign-up__wrapper">
        <h3 className="completed-sign-up__header">Completed</h3>
        <p className="completed-sign-up__message">
          Please verify your email address, you should have received an email
          from us already
        </p>
      </div>
    </div>
  );
};

CompletedSignUp.propTypes = {
  /** The state of the redux store */
  state: PropTypes.shape({}).isRequired
};

export default connect(state => ({ state }))(CompletedSignUp);
