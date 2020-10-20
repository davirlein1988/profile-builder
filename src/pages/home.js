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
          <Feature.Title>Davirlein Prada</Feature.Title>
          <Feature.SubTitle>
            Computer Science bachelor's degree, Full-stack developer with 4
            years of experience in software development, building jaw dropping
            UI/UX
          </Feature.SubTitle>
        </Feature>
      </HeaderContainer>
      <JumboContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
