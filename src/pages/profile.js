import React from 'react';
import { FooterProfileContainer } from '../containers/profile-footer';
import { ContactContainer } from '../containers/contact-container';
import { NewsContainer } from '../containers/news-container';
import { ProjectsContainer } from '../containers/projects-container';
import { ServiceContainer } from '../containers/service-container';
import { AboutContainer } from '../containers/about-container';
import { PageHelmet } from '../components';
import { NavigationContainer } from '../containers/navigation-container';
export default function Profile() {
  return (
    <div className="active-dark">
      <PageHelmet
        pageTitle="Lein Profile"
        content="Software Engineer, Backend Developer, Full Stack Developer, Surgeon in Progress"
      />
      <NavigationContainer>
        <span> Dr, Surgeon, Neurosurgeon</span>
        <span> Js Full Stack Developer</span>
        <span> Spanish/English/German Translator.</span>
      </NavigationContainer>
      <AboutContainer />
      <ServiceContainer />
      <ProjectsContainer />
      <NewsContainer />
      <ContactContainer />
      <FooterProfileContainer />
    </div>
  );
}
