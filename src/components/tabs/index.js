import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function TabsProfile({ tabStyle }) {
  const tab1 = 'Main skills',
    tab2 = 'Awards',
    tab3 = 'Experience',
    tab4 = 'Education & Certification';

  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  <Tab>{tab2}</Tab>
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          User experience design <span> - UI/UX</span>
                        </a>
                        Delight the user and make it work.
                      </li>
                      <li>
                        <a href="/service">
                          Front-End Development
                          <span> - Development</span>
                        </a>
                        Websites, web experiences, and more...
                      </li>
                      <li>
                        <a href="/service">
                          Backend Developmet{' '}
                          <span>
                            {' '}
                            - Rich API integration with front-end and mobile
                            apps
                          </span>
                        </a>
                        I like to move it move it.
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          University of the People{' '}
                          <span>- 7 times Dean List</span>
                        </a>{' '}
                        2018 - 2020
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          Jr. FullStack Engineer<span> - Bewe.io</span>
                        </a>{' '}
                        2018
                      </li>
                      <li>
                        <a href="/service">
                          FullStack Engineer
                          <span> - Teravision Technologies</span>
                        </a>{' '}
                        2019 - 2020
                      </li>
                      <li>
                        <a href="/service">
                          Sr Software Consultant<span> - Gorilla Logic </span>
                        </a>{' '}
                        2020
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          BSc In CSE
                          <span>
                            {' '}
                            - University of the People, San Francisco, CA
                          </span>
                        </a>{' '}
                        2018 - 2022
                      </li>
                      <li>
                        <a href="/service">
                          Full Stack Web Development Bootcamp
                          <span> - Bogota Web Dev, BogotaDC</span>
                        </a>{' '}
                        2017
                      </li>
                      <li>
                        <a href="/service">
                          Diploma in Administration
                          <span>
                            {' '}
                            - Corporacion Unificada Nacional, Bogota DC
                          </span>
                        </a>{' '}
                        2013
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
}
