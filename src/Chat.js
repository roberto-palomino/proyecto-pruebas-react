import './Chat.css';
import React, { useState, useRef } from 'react';
import Header from './componentes/Header/Header';
import Avatar from './componentes/Avatar/Avatar';
import { ClickCounter } from './componentes/ClickCounter';
function Chat(props) {
  const messagesList = [
    {
      id: 1,
      author: 456317,
      body: 'mensaje 0 con un texto algo largo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2019-03-26T18:33:00',
    },
    {
      id: 2,
      author: 456317,
      body: 'mensaje 1 de texto suficientemente largo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2019-03-26T18:33:02',
    },
    {
      author: 456326,
      body: 'Yo... no soy tu padre',
      date: '2019-03-27T09:33:41.579Z',
      id: 3,
    },
  ];

  // MUESTRA POR CONSOLA LO QUE SE INTRODUCE EN FORMULARIO:
  const handleSubmit = e => {
    e.preventDefault();
    const consoleResponse = e.target.elements.messageText.value;
    console.log(consoleResponse);
  };

  const [messages, setMessages] = useState(messagesList);
  const inputMessage = useRef('');

  // AÑADE DENTRO DE UN NUEVO MESSAGE LO QUE SE INTRODUCE EN ENVIAR:

  const handleFormSubmit = e => {
    e.preventDefault();
    //const userMessage = e.target.elements.message.value; //Obtener elemento en el target del form
    const userMessage = inputMessage.current.value; //Obtener elemento de la referencia
    // e.target.elements.message.value = ''; // limpiar el input
    inputMessage.current.value = ''; // limpiar el input
    const newMessage = {
      author: 456328, //author hardcoded -por ahora-
      body: userMessage,
      date: new Date().toISOString(),
      id: 4, //id hardcoded => provoca error por consola
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className='main-container'>
      {
        <form onSubmit={handleSubmit}>
          <label htmlFor='text'> Formulario:</label>
          <input type='text' id='text' name='messageText' />
          <button>Enviar</button>
        </form>
      }
      {
        <form onSubmit={handleFormSubmit}>
          <input type='text' name='message' id='mensaje' ref={inputMessage} />
          <button>Enviar</button>
        </form>
      }
      <ClickCounter />
      {/* <ClickCounter2 /> */}
      <Header fecha='01/04/2019-09:14:16' />
      {/* <Message name='joselito' text='mensaje 1' hora='22:14 pm' />
      <Message
      name='miguelito'
      text='mensaje 2'
      hora={date.toLocaleTimeString()}
      />
    <Avatar name='pepito' /> */}
      {/* <Message2 message={messages[0]} /> */}
      {
        messages.map(message => (
          <Message2 key={message.id} message={message} />
        ))

        /*    messages.map(message => (
          <Message
          name={message.author}
          text={message.body}
          hora={message.date}
          />
          )) */
      }
      {/* <RemderAllMessage messages={messages} /> */}
      {/* <Input /> */}
    </div>
  );
}

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
  //   const date =
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

export default Chat;
