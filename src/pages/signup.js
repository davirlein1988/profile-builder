import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterProfileContainer } from '../containers/profile-footer';
import * as ROUTES from '../constants/routes';
import { Form } from '../components';

const Signup = () => {
  const [firstName, setFirstName] = useState(''),
    [emailAddres, setEmailAddress] = useState(''),
    [password, setPassword] = useState(''),
    [error, setError] = useState(''),
    isInvalid = firstName === '' || password === '' || emailAddres === '',
    handleSignup = (event) => {
      event.preventDefault();
      console.log(emailAddres, password);
    };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Full Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              autocomple="off"
              value={emailAddres}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autocomple="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already Have a Profile ?{' '}
            <Form.Link to={`${ROUTES.SIGN_IN}`}>Sign in Instead</Form.Link>
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

export default Signup;
