import React from 'react';
import { Container } from './styles/about';
export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
