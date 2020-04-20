import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { userStepCompleted, privacyStepCompleted } from '../../redux/selectors';

import './styles.scss';

/**
 * Header component - contains the navigation links (NavLink)s for route navigation.
 * NavLinks update their respective class names with 'active' if the current path corresponds to
 * the path that they individually link to. NavLinks can also be disabled (via class name) if they
 * depend on previous steps being completed.
 */
const Header = ({ state }) => (
  <div className="header">
    <div className="header__wrapper">
      <NavLink
        className="header__link header__link--user"
        activeClassName="active"
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={classNames(
          'header__link header__link--privacy',
          !userStepCompleted(state) && 'disabled'
        )}
        activeClassName="active"
        to="/privacy"
      >
        Privacy
      </NavLink>
      <NavLink
        className={classNames(
          'header__link header__link--done',
          !privacyStepCompleted(state) && 'disabled'
        )}
        activeClassName="active"
        to="/done"
      >
        Done
      </NavLink>
    </div>
  </div>
);

Header.propTypes = {
  /** The state of the redux store */
  state: PropTypes.shape({}).isRequired
};

export default connect(state => ({ state }))(Header);
