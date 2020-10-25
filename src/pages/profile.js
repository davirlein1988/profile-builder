import React from 'react';
import { FooterProfileContainer } from '../containers/profile-footer';
import { ContactContainer } from '../containers/contact-container';
import { NewsContainer } from '../containers/news-container';
import { ProjectsContainer } from '../containers/projects-container';
import { ServiceContainer } from '../containers/service-container';
export default function Profile() {
  return (
    <div className="active-dark">
      <ServiceContainer />
      <ProjectsContainer />
      <NewsContainer />
      <ContactContainer />
      <FooterProfileContainer />
    </div>
  );
}
