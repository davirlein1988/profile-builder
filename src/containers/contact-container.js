import React from 'react';

import { Contact } from "../components";

export function ContactContainer() {
  return (
    <Contact id="contact" className="fix">
      <div className="rn-contact-area ptb--120 bg_color--1">
        <Contact.Tree className="contact-form--1">
          <Contact.Box className="container">
            <Contact.Row className="row row--35 align-items-start">
              <Contact.Column className="col-lg-6 order-2 order-lg-1">
                <Contact.TitleWrapper className="section-title text-left mb--50">
                  <Contact.Title className="title" />
                  <Contact.Text className="description">
                    I am available for freelance work. Connect with me via phone: 
                    <a href="tel:+573152503647">3152503647</a> or email:
                    <a href="mailto:lein.davir@gmail.com">lein.davir@gmail.com</a>
                  </Contact.Text>
                </Contact.TitleWrapper>

                <Contact.FormWrapper className="form-wrapper">
                  <Contact.Form />
                </Contact.FormWrapper>

              </Contact.Column>
            </Contact.Row>
          </Contact.Box>
        </Contact.Tree>
      </div>
    </Contact>
  )
}