import React from 'react';
import { About, ProfileTabs } from '../components';

export function AboutContainer() {
  const title = 'About Me',
    description =
      'Computer Science bachelor degree in progress, Full-stack developer with 4 years of experience in software development, and more than 2 years of experience with Javascript. Experience with nodeJS, Front end with React.js Vue.js, CSS/SCSS preprocessors. Use of relational databases with SQL/Postgres, non-relational databases with MongoDB and Firebase, Express, Mongoose. Mobile development with react native. Constantly learning Linux, bash, and C programming. ';
  return (
    <About id="abour" className="fix">
      <About.Box className="about-area ptb--120  bg_color--1">
        <About.Box className="about-wrapper">
          <About.Box className="container">
            <About.Row className="row row--35 align-items-center">
              <About.Col className="col-lg-5">
                <About.Box className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/lein.jpeg"
                    alt="About Images"
                  />
                </About.Box>
              </About.Col>
              <About.Col className="col-lg-7">
                <About.Box className="about-inner inner">
                  <About.Box className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </About.Box>
                  <About.Box className="row mt--30">
                    <ProfileTabs tabStyle="tab-style--1" />
                  </About.Box>
                </About.Box>
              </About.Col>
            </About.Row>
          </About.Box>
        </About.Box>
      </About.Box>
    </About>
  );
}
