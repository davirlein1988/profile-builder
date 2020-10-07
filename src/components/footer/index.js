import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  GithubIcon,
} from "./styles/footer";
export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
Footer.FacebookIcon = function FooterFacebookIcon({ ...restProps }) {
  return <FacebookIcon {...restProps} />;
};
Footer.InstagramIcon = function FooterInstagramIcon({ ...restProps }) {
  return <InstagramIcon {...restProps} />;
};
Footer.TwitterIcon = function FooterTwitterIcon({ ...restProps }) {
  return <TwitterIcon {...restProps} />;
};
Footer.LinkedinIcon = function FooterLinkedinIcon({ ...restProps }) {
  return <LinkedInIcon {...restProps} />;
};
Footer.GithubIcon = function FooterGithubIcon({ ...restProps }) {
  return <GithubIcon {...restProps} />;
};
