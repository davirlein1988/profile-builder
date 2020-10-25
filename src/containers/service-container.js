import React from 'react';

import { Service } from '../components';

export function ServiceContainer() {
  return (
    <Service id="service" className="fix">
      <Service.Box className="service-area creative-service-wrapper ptb--120 bg_color--5">
        <Service.Box className="container">
          <Service.Row className="row">
            <Service.Col className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                <h2 className="title">What Value do I add?</h2>
                <p>
                  Code with the hightest industry standards, reusable, scalable,
                  testable and with the best industry practices. Agile
                  development and an excellent team player.
                </p>
                <p>Development stack</p>
              </div>
            </Service.Col>
          </Service.Row>
          <Service.Row className="row creative-service">
            <Service.Col className="col-lg-12">
              List of Services....
            </Service.Col>
          </Service.Row>
        </Service.Box>
      </Service.Box>
    </Service>
  );
}
