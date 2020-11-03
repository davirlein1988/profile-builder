import React from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaAt,
} from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';

import { HeaderTree } from '../components';

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
export function NavigationContainer({ children, ...restProps }) {
  const logoUrl = (
      <img
        src="/assets/images/logo/logo-symbol-dark.png"
        alt="Digital Agency"
      />
    ),
    actionLink =
      'https://themeforest.net/checkout/from_item/25457315?license=regular',
    menuTrigger = () =>
      document.querySelector('.header-wrapper').classList.toggle('menu-open'),
    closeMenuTrigger = () =>
      document.querySelector('.header-wrapper').classList.remove('menu-open');
  return (
    <HeaderTree
      {...restProps}
      className="header-area header-style-two header--fixed color-black"
    >
      <HeaderTree.Wrapper className="header-wrapper">
        <HeaderTree.Wrapper className="header-left d-flex align-items-center">
          <HeaderTree.Box className="logo">
            <HeaderTree.Link href="/">{logoUrl}</HeaderTree.Link>
          </HeaderTree.Box>
          <HeaderTree.Nav
            className="mainmenu"
            items={['home', 'about', 'service', 'portfolio', 'blog', 'contact']}
            currentClassName="is-current"
            offset={-200}
          />
        </HeaderTree.Wrapper>
        <HeaderTree.Wrapper className="header-right">
          <HeaderTree.Box className="social-share-inner">
            <HeaderTree.List className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <HeaderTree.ListItem key={i}>
                  <HeaderTree.Link href={`${val.link}`}>
                    {val.Social}
                  </HeaderTree.Link>
                </HeaderTree.ListItem>
              ))}
            </HeaderTree.List>
          </HeaderTree.Box>
          <HeaderTree.Box className="header-btn">
            <HeaderTree.Link className="rn-btn" href={actionLink}>
              <span>Let's Do it</span>
            </HeaderTree.Link>
          </HeaderTree.Box>
          <HeaderTree.Box className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </HeaderTree.Box>
          <HeaderTree.Box className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </HeaderTree.Box>
        </HeaderTree.Wrapper>
      </HeaderTree.Wrapper>
      {children}
    </HeaderTree>
  );
}
