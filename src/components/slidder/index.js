import React from 'react';
import TextLoop from 'react-text-loop';
import {
  Container,
  Box,
  Row,
  Col,
  Title,
  SubTitle,
  Link,
  Text,
} from './styles/slidder';

export default function Slidder({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Slidder.Box = function SlidderBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Slidder.Row = function SlidderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Slidder.Col = function SlidderCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
Slidder.Title = function SlidderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Slidder.SubTitle = function SlidderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Slidder.Link = function SlidderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Slidder.Text = function SlidderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Slidder.Loop = function SlidderLoop({
  text = '',
  titleClass = 'title',
  items = [''],
  children,
  ...restProps
}) {
  return (
    <Title className={titleClass}>
      {
        (text,
        (
          <TextLoop>
            {items.map((title, i) => (
              <span key={i} {...restProps}>
                {title}
              </span>
            ))}
          </TextLoop>
        ))
      }
    </Title>
  );
};
