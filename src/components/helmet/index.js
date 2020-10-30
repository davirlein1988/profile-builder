import React from 'react';
import { Helmet } from 'react-helmet';

export default function PageHelmet({ description, pageTitle, content }) {
  return (
    <>
      <Helmet>
        <title>{pageTitle} || Professional Profile Builder</title>
        <meta
          name={description || 'description'}
          content={
            content || 'Profile Builder. A professional look to your resume'
          }
        />
      </Helmet>
    </>
  );
}
