import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { HeaderContainer } from '../containers/header';
import { FooterProfileContainer } from '../containers/profile-footer';
import * as ROUTES from '../constants/routes';
// import { useHistory } from 'react-router-dom';
// import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
const ConfirmationPassword = () => {
  const history = useHistory(),
    [verification, setVerification] = useState(''),
    [emailAddres, setEmailAddress] = useState(''),
    [password, setPassword] = useState(''),
    [passwordConfirm, setPasswordConfirm] = useState(''),
    [error, setError] = useState(''),
    isInvalid =
      verification === '' ||
      verification.length < 6 ||
      password === '' ||
      emailAddres === '' ||
      password !== passwordConfirm,
    handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await Auth.forgotPasswordSubmit(
          emailAddres,
          verification,
          password
        );
        window.flash('Password has been updated, please login');
        console.assert(response, 'error!!!!!!');
        history.push(`${ROUTES.SIGN_IN}`);
      } catch (error) {
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        setVerification('');
        setEmailAddress('');
        setPassword('');
        setPasswordConfirm('');
        setError(err.message);
        window.flash('Error updating the password', 'error');
      }
    };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Setup a new password</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              placeholder="Verification Code"
              type="number"
              value={verification}
              onChange={({ target }) => setVerification(target.value)}
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

export default ConfirmationPassword;
