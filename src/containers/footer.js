import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Question? Contact us</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link>FAQ</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>About</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Blog</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Text>Social Media</Footer.Text>
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
