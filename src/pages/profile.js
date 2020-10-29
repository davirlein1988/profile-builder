import React from 'react';
import { FooterProfileContainer } from '../containers/profile-footer';
import { ContactContainer } from '../containers/contact-container';
import { NewsContainer } from '../containers/news-container';
import { ProjectsContainer } from '../containers/projects-container';
import { ServiceContainer } from '../containers/service-container';
import { AboutContainer } from '../containers/about-container';
export default function Profile() {
  return (
    <div className="active-dark">
      <AboutContainer />
      <ServiceContainer />
      <ProjectsContainer />
      <NewsContainer />
      <ContactContainer />
      <FooterProfileContainer />
    </div>
  );
}
