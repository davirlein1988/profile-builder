import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header src="2">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Profile Builder" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
