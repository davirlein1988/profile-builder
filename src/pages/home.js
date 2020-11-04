import React from 'react';

import { FooterContainer } from '../containers/footer';
// import { JumboContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
import { Feature } from '../components';
import { FooterProfileContainer } from '../containers/profile-footer';
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Tell The world about you</Feature.Title>
          <Feature.SubTitle>
            Tell us what you want the world to know about you do, showcase your
            work, experiences, portfolio and we will take care of making it look
            great.
          </Feature.SubTitle>
        </Feature>
      </HeaderContainer>
      <FooterProfileContainer />
    </>
  );
};

export default Home;
