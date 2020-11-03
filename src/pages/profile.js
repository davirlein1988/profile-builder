import React from 'react';
import { FooterProfileContainer } from '../containers/profile-footer';
import { ContactContainer } from '../containers/contact-container';
import { NewsContainer } from '../containers/news-container';
import { ProjectsContainer } from '../containers/projects-container';
import { ServiceContainer } from '../containers/service-container';
import { AboutContainer } from '../containers/about-container';
import { PageHelmet, Slidder } from '../components';
import { NavigationContainer } from '../containers/navigation-container';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome aboard',
    description:
      'Not only developing software, Creating wonderful experiences making clients and customers happy',
    buttonText: 'let"s rock & roll',
    buttonLink: '/signin',
  },
];
export default function Profile() {
  return (
    <div className="active-dark">
      <PageHelmet
        pageTitle="Lein Profile"
        content="Software Engineer, Backend Developer, Full Stack Developer, Surgeon in Progress"
      />
      <NavigationContainer>
        <Slidder id="home" className="fix">
          <Slidder.Box className="slider-wrapper">
            {SlideList.map((value, i) => (
              <Slidder.Box
                className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--34"
                key={i}
              >
                <Slidder.Box className="container">
                  <Slidder.Row className="row">
                    <Slidder.Col className="col-lg-12">
                      <Slidder.Box className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ''}
                        <Slidder.Loop
                          titleClass="title"
                          text="Hi, This is Lein..."
                          items={[
                            'Dr, Surgeon, Neurosurgeon',
                            'Js Full Stack Developer',
                            'UI/UX Designer',
                            'English/Spanish/German Translator',
                          ]}
                        />
                        <Slidder.SubTitle>
                          Based Bogotá DC, Buenos Aires, Remotely
                        </Slidder.SubTitle>
                        {value.description ? (
                          <Slidder.Text className="description">
                            {value.description}
                          </Slidder.Text>
                        ) : (
                          ''
                        )}
                        {value.buttonText ? (
                          <Slidder.Box className="slide-btn">
                            <Slidder.Link
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </Slidder.Link>
                          </Slidder.Box>
                        ) : (
                          ''
                        )}
                      </Slidder.Box>
                    </Slidder.Col>
                  </Slidder.Row>
                </Slidder.Box>
              </Slidder.Box>
            ))}
          </Slidder.Box>
        </Slidder>
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
