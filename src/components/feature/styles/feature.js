import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
  min-height: 90vh;
`;

export const Title = styled.div`
  color: #f9004d;
  max-width: 100%;
  font-size: 60px;
  font-weight: 900;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.div`
  color: #c6c9d8;
  max-width: 90%;
  font-size: 26px;
  font-weight: normal;
  margin: 3rem auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
