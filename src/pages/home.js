import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

import { SlideShow } from '../components';
import { FooterProfileContainer } from '../containers/profile-footer';
import PageHelmet from '../components/helmet/index';
import Slider from 'react-slick';
import { slideSlick } from '../constants/settings';
import { NavigationContainer } from '../containers/navigation-container';
import { ServiceContainer } from '../containers/service-container';
import { ProjectsContainer } from '../containers/projects-container';

const SlideList = [
  {
    textPosition: 'text-left',
    bgImage: 'bg_image--17',
    category: '',
    title: 'Grow business.',
    description:
      'Getting professionals to grow your business where it needs in a changing world where thriving is a must.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    textPosition: 'text-right',
    bgImage: 'bg_image--18',
    category: '',
    title: 'Innovation.',
    description:
      'A great Idea only works when the right strategy is used for positioning in its niche.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    textPosition: 'text-left',
    bgImage: 'bg_image--19',
    category: '',
    title: 'Design.',
    description: 'The right UX/UI wil sell more than a thoused words.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    textPosition: 'text-right',
    bgImage: 'bg_image--20',
    category: '',
    title: 'Marketing.',
    description:
      'The right word to the right market, positioning and customer engagement.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    textPosition: 'text-left',
    bgImage: 'bg_image--21',
    category: '',
    title: 'Health and Science.',
    description:
      'The best professional in the medical sciences and applied sciences.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
];

const Home = () => {
  return (
    <>
      <PageHelmet pageTitle="Our Business" />
      <NavigationContainer />
      <SlideShow id="about" className="slider-wrapper">
        <SlideShow.Box className="slider-activation">
          <Slider className="rn-slick-dot dot-light" {...slideSlick}>
            {SlideList.map((value, index) => (
              <SlideShow.Box
                className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                key={index}
                data-black-overlay="8"
              >
                <SlideShow.Box className="container">
                  <SlideShow.Row className="row">
                    <SlideShow.Col className="col-lg-12">
                      <SlideShow.Box className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ''}
                        {value.title ? (
                          <SlideShow.Title className="title">
                            {value.title}
                          </SlideShow.Title>
                        ) : (
                          ''
                        )}
                        {value.description ? (
                          <SlideShow.Text className="description">
                            {value.description}
                          </SlideShow.Text>
                        ) : (
                          ''
                        )}
                        {value.buttonText ? (
                          <SlideShow.Box className="slide-btn">
                            <SlideShow.Link
                              className="rn-button-style--2 btn-solid"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </SlideShow.Link>{' '}
                          </SlideShow.Box>
                        ) : (
                          ''
                        )}
                      </SlideShow.Box>
                    </SlideShow.Col>
                  </SlideShow.Row>
                </SlideShow.Box>
              </SlideShow.Box>
            ))}
          </Slider>
        </SlideShow.Box>
      </SlideShow>
      <ServiceContainer />
      <ProjectsContainer />
      <FooterProfileContainer />
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
  );
};

export default Home;
