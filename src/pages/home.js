import React from "react";

import { FooterContainer } from "../containers/footer";
import { JumboContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
import { Feature } from "../components";
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Ready to build wonderful pieces of software?
          </Feature.Title>
          <Feature.SubTitle>
            Developing software that enhances life and creates positive impacts
            in out environment
          </Feature.SubTitle>
        </Feature>
      </HeaderContainer>
      <JumboContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
