import React from 'react';
import Scrollspy from 'react-scrollspy';
import {
  Container,
  Box,
  Row,
  Col,
  Header,
  Nav,
  Link,
  List,
  ListItem,
} from './styles/header-tree';

import { capitalize } from '../../helpers/strings';

export default function HeaderTree({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
}

HeaderTree.Wrapper = function HeaderTreeWrapper({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
HeaderTree.Box = function HeaderTreeBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
HeaderTree.Row = function HeaderTreeRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
HeaderTree.Col = function HeaderTreeCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
HeaderTree.Link = function HeaderTreeLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
HeaderTree.List = function HeaderTreeList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
HeaderTree.Nav = function HeaderTreeNav({
  items,
  currentClassName,
  offset,
  children,
  ...restProps
}) {
  console.log(items);
  return (
    <Nav {...restProps}>
      <Scrollspy items={['']} currentClassName offset {...restProps}>
        {items.map((item) => (
          <ListItem key={item}>
            <Link href={`#${item}`}>{capitalize(item)}</Link>{' '}
          </ListItem>
        ))}
      </Scrollspy>
    </Nav>
  );
};
HeaderTree.ListItem = function HeaderTreeListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
