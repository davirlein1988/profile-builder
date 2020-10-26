import React from 'react';
import { Container, Box, Row, Col } from './styles/about';
export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Box = function AboutBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
About.Col = function AboutCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
About.Row = function AboutRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
