import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { addUserData } from '../../../../redux/actions';

import './styles.scss';

const Form = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <div className="user-details">
    <div className="user-details__wrapper">
      <h4 className="user-details__header">User Details</h4>
      <form className="user-details__form" onSubmit={handleSubmit}>
        <div className="user-details__form__input-container user-details__form__name">
          <label htmlFor="name">
            Name <span>*</span>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.name && touched.name && (
            <div className="user-details__form__input-error">{errors.name}</div>
          )}
        </div>
        <div className="user-details__form__input-container user-details__form__role">
          <label htmlFor="role">
            Role
            <input
              id="role"
              name="role"
              type="text"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.role && touched.role && (
            <div className="user-details__form__input-error">{errors.role}</div>
          )}
        </div>
        <div className="user-details__form__input-container user-details__form__email">
          <label htmlFor="email">
            Email <span>*</span>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {errors.email && touched.email && (
            <div className="user-details__form__input-error">
              {errors.email}
            </div>
          )}
        </div>
        <div className="user-details__form__input-container user-details__form__password">
          <label htmlFor="password">
            Password <span>*</span>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <div className="user-details__form__input-hint">
            Password must be at least 10 characters in length, and have at least
            1 number, 1 uppercase letter and 1 lowercase letter.
          </div>
          {errors.password && touched.password && (
            <div className="user-details__form__input-error">
              {errors.password}
            </div>
          )}
        </div>
        <button
          className="user-details__form__submit-button"
          type="submit"
          disabled={
            errors.name ||
            errors.role ||
            errors.email ||
            errors.password ||
            isSubmitting ||
            !dirty
          }
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

const EnhancedForm = withFormik({
  mapPropsToValues: ({ userData: { name, role, email, password } }) => ({
    name,
    role,
    email,
    password
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter a valid name')
        .required('Name is required'),
      role: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter a valid role'),
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),
      password: Yup.string()
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/,
          'Please enter a valid password'
        )
        .required('Password is required')
    }),
  handleSubmit: (values, { props: { dispatch, history } }) => {
    dispatch(addUserData(values));
    history.push('/privacy');
  }
})(Form);

Form.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    role: PropTypes.bool,
    email: PropTypes.bool,
    password: PropTypes.bool
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({ userData }) => ({ userData });
const mapDispatchToProps = dispatch => ({ dispatch });

const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EnhancedForm));

export default UserDetails;
