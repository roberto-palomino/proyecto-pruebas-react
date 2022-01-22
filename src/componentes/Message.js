import React from 'react';
import Avatar from './Avatar/Avatar';

// FORMA UNO DE HACERLO:
/* const Message = ({ name, text, hora }) => {
  return (
    <div className='message'>
      <Avatar name={name} />
      <div className='message-body'>
        <div className='message-time'>Enviado a las {hora}</div>
        <div className='message-text'>{text}</div>
      </div>
    </div>
  );
}; */
// FORMA DOS DE HACERLO (MEJOR):

export const Message2 = ({ message }) => {
  const { author, date, body } = message;

  return (
    <div className='message'>
      <Avatar name={author} />
      <div className='message-body'>
        <div className='message-time'>
          Enviado a las {new Date(date).toLocaleTimeString('es-ES')}
        </div>
        <div className='message-text'>{body}</div>
      </div>
    </div>
  );
};
