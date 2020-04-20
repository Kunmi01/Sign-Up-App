import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';

const CompletedSignUp = ({ state }) => {
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
  state: PropTypes.shape({}).isRequired
};

export default connect(state => ({ state }))(CompletedSignUp);
