import React from "react";
import { Container } from "./styles/snippets";
import { PrismAsync as SyntaxHighLighter } from "react-syntax-highlighter";
export default function Snippet({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Snippet.SyntaxHighLighter = function SnippetSyntaxHighLighter({
  children,
  ...restProps
}) {
  return <SyntaxHighLighter {...restProps}>{children}</SyntaxHighLighter>;
};
