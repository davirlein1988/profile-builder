import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { HeaderContainer } from '../containers/header';
import { FooterProfileContainer } from '../containers/profile-footer';
import * as ROUTES from '../constants/routes';
import { Captcha, Form } from '../components';

const Signup = () => {
  const history = useHistory(),
    [username, setUsername] = useState(''),
    [emailAddres, setEmailAddress] = useState(''),
    [password, setPassword] = useState(''),
    [passwordConfirm, setPasswordConfirm] = useState(''),
    [captcha, setCaptcha] = useState(''),
    [error, setError] = useState(''),
    isInvalid =
      username === '' ||
      password === '' ||
      emailAddres === '' ||
      password !== passwordConfirm ||
      !captcha,
    handleCaptcha = (value) => {
      setCaptcha(value);
    },
    handleSignup = async (event) => {
      event.preventDefault();
      try {
        const response = await Auth.signUp({
          username,
          password,
          attributes: {
            email: emailAddres,
          },
        });
        window.flash('An email confirmation has been sent', 'success');
        console.log('REsponse:', response);
        history.push('/');
      } catch (error) {
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        setUsername('');
        setEmailAddress('');
        setPassword('');
        setPasswordConfirm('');
        setError(err.message);
        window.flash('An email confirmation has been sent', 'error');
      }
    };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
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
            <Form.Input
              type="password"
              placeholder="Password Confirmation"
              autocomple="off"
              value={passwordConfirm}
              onChange={({ target }) => setPasswordConfirm(target.value)}
            />
            <Captcha handleChange={handleCaptcha} />
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
