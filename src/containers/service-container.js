import React from 'react';

import { Service, ServiceItem } from '../components';

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
                <h4>Development stack</h4>
              </div>
            </Service.Col>
          </Service.Row>
          <Service.Row className="row creative-service">
            <Service.Col className="col-lg-12">
              <ServiceItem
                item="3"
                column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
              />
            </Service.Col>
          </Service.Row>
        </Service.Box>
      </Service.Box>
    </Service>
  );
}
