import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { userStepCompleted, privacyStepCompleted } from '../../redux/selectors';

import './styles.scss';

const Header = ({ state }) => {
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
};

Header.propTypes = {
  state: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Header);
