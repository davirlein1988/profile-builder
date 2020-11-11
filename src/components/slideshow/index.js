import React from 'react';

import {
  Container,
  Box,
  Row,
  Col,
  Text,
  Link,
  Title,
} from './styles/slideshow';
export default function SlideShow({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SlideShow.Box = function SlideShowBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
SlideShow.Row = function SlideShowRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
SlideShow.Col = function SlideShowCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
SlideShow.Text = function SlideShowText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
SlideShow.Link = function SlideShowLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
SlideShow.Title = function SlideShowTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
