import React from 'react';
import { Container, Box, Row, Col, List } from './styles/news';

export default function News({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

News.Box = function NewsBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

News.Row = function NewsRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
News.Col = function NewsCol({ item, children, ...restProps }) {
  return (
    <Col {...item} {...restProps}>
      {children}
    </Col>
  );
};

News.Items = function NewsItems({ items, children, ...restProps }) {
  return (
    <List {...items} {...restProps}>
      {children}
    </List>
  );
};
