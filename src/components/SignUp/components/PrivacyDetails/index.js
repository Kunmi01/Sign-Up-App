import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { addPrivacyData } from '../../../../redux/actions';

import './styles.scss';

const PrivacyDetails = ({ userData, privacyData, dispatch }) => {
  const [trayUpdates, setTrayUpdates] = useState(privacyData.trayUpdates);
  const [productEmails, setProductEmails] = useState(privacyData.productEmails);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    setTimeout(() => {
      dispatch(addPrivacyData({ trayUpdates, productEmails }));
      history.push('/done');
    }, 500);
  };

  const userCompleted = Object.keys(userData).every(key => userData[key]);

  return userCompleted ? (
    <div className="privacy-details">
      <div className="privacy-details__wrapper">
        <h4 className="privacy-details__header">Privacy Details</h4>
        <form className="privacy-details__form" onSubmit={handleSubmit}>
          <div className="privacy-details__form__input-container privacy-details__form__tray-updates">
            <label htmlFor="tray-updates">
              <input
                id="tray-updates"
                name="tray-updates"
                type="checkbox"
                checked={trayUpdates}
                onChange={({ target: { checked } }) => setTrayUpdates(checked)}
              />
              Receive updates about Tray.io product by email
            </label>
          </div>
          <div className="privacy-details__form__input-container privacy-details__form__product-emails">
            <label htmlFor="product-emails">
              <input
                id="product-emails"
                name="product-emails"
                type="checkbox"
                checked={productEmails}
                onChange={({ target: { checked } }) =>
                  setProductEmails(checked)
                }
              />
              Receive communication by email for other products created by the
              Tray.io team
            </label>
          </div>
          <button
            className="privacy-details__form__submit-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/user" />
  );
};

const mapStateToProps = ({ userData, privacyData }) => ({
  userData,
  privacyData
});
const mapDispatchToProps = dispatch => ({ dispatch });

PrivacyDetails.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  privacyData: PropTypes.shape({
    trayUpdates: PropTypes.bool,
    productEmails: PropTypes.bool
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyDetails);
