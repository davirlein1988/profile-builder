import React, { useEffect } from 'react';
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
    actionLink = `${process.env.PUBLIC_URL}#contact`,
    menuTrigger = () =>
      document.querySelector('.header-wrapper').classList.toggle('menu-open'),
    closeMenuTrigger = () =>
      document.querySelector('.header-wrapper').classList.remove('menu-open');
  useEffect(() => {
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      if (value > 100) {
        document.querySelector('.header--fixed').classList.add('sticky');
      } else {
        document.querySelector('.header--fixed').classList.remove('sticky');
      }
    });

    const elements = document.querySelectorAll('.has-droupdown > a');
    for (let i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }
  }, []);
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
                  <HeaderTree.Link target="blank" href={`${val.link}`}>
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
