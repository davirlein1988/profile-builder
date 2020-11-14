import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { HeaderContainer } from '../containers/header';
import { FooterProfileContainer } from '../containers/profile-footer';
import * as ROUTES from '../constants/routes';
// import { useHistory } from 'react-router-dom';
// import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
const ForgotPassword = () => {
  const history = useHistory(),
    [email, setEmail] = useState(''),
    [error, setError] = useState(''),
    isInvalid = email === '',
    handleReset = async (event) => {
      event.preventDefault();
      try {
        const user = await Auth.forgotPassword(email);
        window.flash(
          'An email has been set with a verification code',
          'success'
        );
        history.push(`${ROUTES.CONFIRMATION_PASSWORD}`);
      } catch (error) {
        let err = null;
        !error.message ? (err = { message: error }) : (err = error);
        setEmail('');
        setError(err.message);
      }
    };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Forgot Password?</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleReset} method="POST">
            <Form.Input
              placeholder="youreamil@mail.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              autocomple="off"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Submit
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

export default ForgotPassword;
