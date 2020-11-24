import React, { useState, useEffect } from 'react';
import Bus from '../../utils/bus';
import { Container, Close, Text } from './styles/flash';
export default function Flash({ children, ...restProps }) {
  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState('');
  let [type, setType] = useState('');
  const flasTypes = {
    error: '#f9004d',
    success: '#00BD9D',
    warning: '#F0AD4E',
  };

  useEffect(() => {
    Bus.addListener('flash', ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);

  useEffect(() => {
    if (document.querySelector('.close') !== null) {
      document
        .querySelector('.close')
        .addEventListener('click', () => setVisibility(false));
    }
  });
  return (
    visibility && (
      <Container color={flasTypes[`${type}`]}>
        <Close className="close">
          <strong>X</strong>
        </Close>
        <Text>{message}</Text>
      </Container>
    )
  );
}
