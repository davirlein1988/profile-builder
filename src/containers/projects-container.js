import React, { useState, useEffect } from 'react';

import { Projects } from '../components';

const projects = [
  {
    image: 'image-1',
    category: 'Front End',
    title: 'Portfolio Builder for Professionals',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/analytics-3088958_640.jpg',
  },
  {
    image: 'image-2',
    category: 'Backend Development',
    title: 'API for Porfolio Builder with Node and AWS',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/ipad-605439_640.jpg',
  },
  {
    image: 'image-3',
    category: 'Development',
    title: 'Tackle the Interview questions, Algorithms and Data structures',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/blue-2137333_640.jpg',
  },
  {
    image: 'image-4',
    category: 'Full Stack Development',
    title: 'Could we teach Spanish people how to code for free?',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/apartment-1899964_640.jpg',
  },
  {
    image: 'image-3',
    category: 'Going back to C',
    title: 'Some review of network implementations in C',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/software-3682509_640.jpg',
  },
  {
    image: 'image-4',
    category: 'Backend',
    title: 'Nodejs uptime monitor',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/cyber-glasses-1938449_640.jpg',
  },
  {
    image: 'image-4',
    category: 'Front-End',
    title: 'css flexbox and grid system',
    link:
      'https://davirlein-porfolio-bucket.s3-sa-east-1.amazonaws.com/uploads/swimming-828795_640.jpg',
  },
];
export function ProjectsContainer() {
  return (
    <Projects id="portfolio" className="fix">
      <Projects.Div className="portfolio-area ptb--120 bg_color--1">
        <Projects.Div className="portfolio-sacousel-inner">
          <Projects.Div className="container">
            <Projects.Row className="row">
              <Projects.Col className="col-lg-12">
                <Projects.Div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Latest Work</h2>
                  <p>
                    In the last two yaeras I have been focused on the realm of
                    Javascript I have work as a full time Contractor and in my
                    free time I have been busy with these gems
                  </p>
                </Projects.Div>
              </Projects.Col>
            </Projects.Row>
            <Projects.Row className="row">
              <>
                {projects.map((val, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <div className={`portfolio text-center mt--40`}>
                      <div className="thumbnail-inner">
                        <Projects.Thumbnail
                          className="thumbnail"
                          url={val.link}
                        ></Projects.Thumbnail>
                        <Projects.Background
                          className=""
                          url={val.link}
                        ></Projects.Background>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p>{val.category}</p>
                          <h4>
                            <a href="/portfolio-details">{val.title}</a>
                          </h4>
                          <div className="portfolio-button">
                            <a className="rn-btn" href="/portfolio-details">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </Projects.Row>
            <div className="row">
              <div className="col-lg-12">
                <div className="view-more-btn mt--60 mt_sm--30 text-center">
                  <a
                    className="rn-button-style--2 btn-solid"
                    href="/portfolios/34" // id will be provided for current user
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
          </Projects.Div>
        </Projects.Div>
      </Projects.Div>
    </Projects>
  );
}
