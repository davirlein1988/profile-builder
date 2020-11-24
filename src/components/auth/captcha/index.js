import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Container } from './styles/captcha';

export default function Captcha({ children, handleChange, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
        onChange={handleChange}
      />
    </Container>
  );
}
