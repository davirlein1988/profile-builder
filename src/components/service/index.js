import React from 'react';

import { Container, Box, Row, Col } from './styles/service';

export default function Service({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Service.Box = function ServiceBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Service.Row = function ServiceRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Service.Col = function ServiceCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
