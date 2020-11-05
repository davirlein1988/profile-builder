import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterProfileContainer } from '../containers/profile-footer';
import * as ROUTES from '../constants/routes';
// import { useHistory } from 'react-router-dom';
// import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
const Signin = () => {
  const [emailAddres, setEmailAddress] = useState(''),
    [password, setPassword] = useState(''),
    [error, setError] = useState(''),
    isInvalid = password === '' || emailAddres === '',
    handleSignin = (event) => {
      event.preventDefault();
      console.log(emailAddres, password);
    };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddres}
              onChange={({ target }) => setEmailAddress(target.value)}
              autocomple="off"
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autocomple="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Do not have your own profile ?{' '}
            <Form.Link to={`${ROUTES.SIGN_UP}`}>Signup now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure you are not a
            bot. Learn more...
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterProfileContainer />
    </>
  );
};

export default Signin;
