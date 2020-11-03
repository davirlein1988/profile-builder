import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Fix, FiMenu } from 'react-icons/fi';
import { Container, Box, Row, Col } from './styles/header-tree';
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaAt,
} from 'react-icons/fa';

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://facebook.com/lein-davir' },
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/lein-davir-profile/',
  },
  { Social: <FaInstagram />, link: 'https://instagram.com/leindavir' },
  { Social: <FaTwitter />, link: 'https://twitter.com/davirlein' },
  { Social: <FaGithub />, link: 'https://github.com/davirlein1988' },
  { Social: <FaAt />, link: 'mailto:lein.davir@gmail.com' },
];

export default function HeaderTree() {
  return (
    <Container>
      <ul>
        <li>link</li>
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </Container>
  );
}
