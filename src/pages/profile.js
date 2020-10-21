import React from "react";
import { FooterProfileContainer } from '../containers/profile-footer';
import { ContactContainer } from '../containers/contact-container';
export default function Profile() {
  return (
    <div className="active-dark">
      <ContactContainer />
      <FooterProfileContainer />
    </div>
  )
}
