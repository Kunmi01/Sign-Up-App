import React, { useState } from 'react';
import './styles.scss';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="sign-up">
      <div className="sign-up__wrapper">
        <form className="sign-up__form" onSubmit={handleSubmit}>
          <div className="sign-up__form__input-container sign-up__form__name">
            <label htmlFor="name">
              Name <span>*</span>
              <input
                id="name"
                name="name"
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </label>
            <div className="sign-up__form__input-error">
              Some error message here...
            </div>
          </div>
          <div className="sign-up__form__input-container sign-up__form__role">
            <label htmlFor="role">
              Role
              <input
                id="role"
                name="role"
                type="text"
                value={userRole}
                onChange={e => setUserRole(e.target.value)}
              />
            </label>
            <div className="sign-up__form__input-error">
              Some error message here...
            </div>
          </div>
          <div className="sign-up__form__input-container sign-up__form__email">
            <label htmlFor="email">
              Email <span>*</span>
              <input
                id="email"
                name="email"
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
            </label>
            <div className="sign-up__form__input-error">
              Some error message here...
            </div>
          </div>
          <div className="sign-up__form__input-container sign-up__form__password">
            <label htmlFor="password">
              Password <span>*</span>
              <input
                id="password"
                name="password"
                type="password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
              />
            </label>
            <div className="sign-up__form__input-error">
              Some error message here...
            </div>
          </div>
          <button className="sign-up__form__submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
