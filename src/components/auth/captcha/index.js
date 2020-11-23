import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Captcha({ children, handleChange, ...restProps }) {
  return (
    <div {...restProps}>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
        onChange={handleChange}
      />
    </div>
  );
}
