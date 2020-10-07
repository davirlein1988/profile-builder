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
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
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
  width: 30px;
  height: 30px;
  font-weight: bold;`;
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
