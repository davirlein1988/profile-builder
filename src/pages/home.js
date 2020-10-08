import React from "react";

import { FooterContainer } from "../containers/footer";
import { JumboContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
const Home = () => {
  return (
    <>
      <HeaderContainer />
      <JumboContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
