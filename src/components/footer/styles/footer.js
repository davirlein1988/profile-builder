import styled from "styled-components/macro";
import {
  FacebookWithCircle,
  TwitterWithCircle,
  LinkedinWithCircle,
  GithubWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  position: relative;
  top: 0;
  left: -20px;
  display: inline-block;
  height: 70px;
  width: 70px;
  margin: 10px auto;
  line-height: 70px;
  border-radius: 50%;
  color: #fff;
  background-color: #1a232e;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 50%;
    opacity: 50;
    box-shadow: 0 0 0 1px #fff;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    background-color: #0066c0;
    color: #fff;
  }
  &:hover:after {
    opacity: 50;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
const iconstyle = () => `
  color: white;
  width: 40px;
  height: 40px;
  font-weight: bold;
  &:hover {
    background-color: #111;
    color: #fff;
  }
  `;
export const FacebookIcon = styled(FacebookWithCircle)`
  ${iconstyle()}
`;
export const TwitterIcon = styled(TwitterWithCircle)`
  ${iconstyle()}
`;
export const LinkedInIcon = styled(LinkedinWithCircle)`
  ${iconstyle()}
`;
export const GithubIcon = styled(GithubWithCircle)`
  ${iconstyle()}
`;
export const InstagramIcon = styled(InstagramWithCircle)`
  ${iconstyle()}
`;
