import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addPrivacyData } from '../../../../redux/actions';

import './styles.scss';

/**
 * PrivacyDetails component - contains the form elements used in collecting input data from the user.
 * The form values are initialized based on the state of the redux store.
 * Submitting the form dispatches the form values to be used in updating the state and then redirects
 * to the done/completed page.
 */
const PrivacyDetails = ({ privacyData, dispatch }) => {
  const [trayUpdates, setTrayUpdates] = useState(
    privacyData.trayUpdates || false
  );
  const [productEmails, setProductEmails] = useState(
    privacyData.productEmails || false
  );
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPrivacyData({ trayUpdates, productEmails }));
    history.push('/done');
  };

  return (
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
  );
};

PrivacyDetails.propTypes = {
  /** The privacyData portion of the state of the redux store */
  privacyData: PropTypes.shape({
    trayUpdates: PropTypes.bool,
    productEmails: PropTypes.bool
  }).isRequired,
  /** Reference to the function for dispatching actions to update the state of the redux store */
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ privacyData }) => ({ privacyData });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyDetails);
