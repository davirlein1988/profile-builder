import React from 'react';
import { Container, Div, Row, Col } from './styles/projects';

export default function Projects({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Projects.Div = function ProjectsDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};
Projects.Row = function ProjectsRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Projects.Col = function ProjectsCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
