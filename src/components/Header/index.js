import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';

const Header = ({ userData }) => {
  const userCompleted = Object.keys(userData).every(key => userData[key]);

  return (
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
            !userCompleted && 'disabled'
          )}
          activeClassName="active"
          to="/privacy"
        >
          Privacy
        </NavLink>
        <NavLink
          className="header__link header__link--done disabled"
          activeClassName="active"
          to="/done"
        >
          Done
        </NavLink>
      </div>
    </div>
  );
};

Header.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ userData }) => ({ userData });

export default connect(mapStateToProps)(Header);
