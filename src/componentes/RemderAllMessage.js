import React from 'react';
import { Message2 } from '../Chat';

// PARA PINTAR TODO EL ARRAY:
const RemderAllMessage = props => {
  const allMessages = props.messages.map(message => (
    <Message2 message={message} />
  ));
  return allMessages;
};
