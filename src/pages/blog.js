import React from 'react';
import { slideSlick } from '../constants/settings';
import { FooterContainer } from '../containers/footer';
import Slider from 'react-slick';
export default function Blog() {
  return (
    <>
      <Slider {...slideSlick}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
      <FooterContainer />{' '}
    </>
  );
}
