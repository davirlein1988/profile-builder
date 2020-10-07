import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Question? Contact us</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#faqs">FAQ</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="/about">About</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="/blog">Blog</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="mailto:lein.davir@gmail.com">e-mail</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Title>Social Media</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://facebook.com/lein-davir" target="blank">
            <Footer.FacebookIcon />
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://twitter.com/davirlein" target="blank">
            <Footer.TwitterIcon />
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="https://instagram.com/leindavir" target="blank">
            <Footer.InstagramIcon />
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="https://github.com/davirlein1988" target="blank">
            <Footer.GithubIcon />
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link
            href="https://www.linkedin.com/in/lein-davir-profile/"
            target="blank"
          >
            <Footer.LinkedinIcon />
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
