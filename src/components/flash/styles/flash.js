import styled from 'styled-components/macro';

export const Container = styled.div`
  background: ${({ color }) => color};
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 1111;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  color: black;
`;

export const Close = styled.span`
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;
