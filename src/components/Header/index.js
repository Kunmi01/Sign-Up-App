import React from 'react';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <button
        className="header__button header__button--user active"
        type="button"
      >
        User
      </button>
      <button
        className="header__button header__button--privacy"
        type="button"
        disabled
      >
        Privacy
      </button>
      <button
        className="header__button header__button--done"
        type="button"
        disabled
      >
        Done
      </button>
    </div>
  </div>
);

export default Header;
