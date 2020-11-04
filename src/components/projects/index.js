import React from 'react';
import {
  Container,
  Div,
  Row,
  Col,
  Thumbnail,
  Background,
} from './styles/projects';

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
Projects.Thumbnail = function ProjectsThumbnail({
  url,
  children,
  ...restProps
}) {
  return (
    <Thumbnail url={url} {...restProps}>
      {children}
    </Thumbnail>
  );
};

Projects.Background = function ProjectsBackground({
  url,
  children,
  ...restProps
}) {
  return (
    <Background url={url} {...restProps}>
      {children}
      <h2>{url}</h2>
    </Background>
  );
};
