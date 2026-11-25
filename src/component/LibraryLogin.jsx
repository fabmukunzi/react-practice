import React, { useState } from 'react';
import LibraryButton from './LibraryButton';

function LibraryLogin() {
  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function navigateBetweenCreateAndLogin() {
    setDoYouHaveAnAccount(!doYouHaveAnAccount);
  }

  const login = () => {
    alert('This is your username : ' + userName + ' and password ' + password);
  };
  return (
    <>
      {doYouHaveAnAccount ? (
        <div style={{ border: '3px solid blue', marginTop: '190px' }}>
          <label>UserName:</label>
          <input
            type="text"
            placeholder="Enter Your username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <LibraryButton onClickButton={login} buttonLabel="LOGIN" /> <br />
          <label>New here? </label>{' '}
          <LibraryButton
            onClickButton={navigateBetweenCreateAndLogin}
            buttonLabel="Create Account"
          />
        </div>
      ) : (
        <div style={{ border: '3px solid indigo', marginTop: '190px' }}>
          <label>Student ID:</label>
          <input type="text" placeholder="Enter Your Student ID" />
          <br />
          <label>Email:</label>
          <input type="email" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <br />
          <label>Confirm Password:</label>
          <input type="password" />
          <br />
          <LibraryButton buttonLabel="LOGIN" /> <br />
          <label>Already have an account?? </label>{' '}
          <LibraryButton
            onClickButton={navigateBetweenCreateAndLogin}
            buttonLabel="Sign In"
          />
        </div>
      )}
    </>
  );
}

export default LibraryLogin;
