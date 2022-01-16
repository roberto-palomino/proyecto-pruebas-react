import './Chat.css';

function Chat(props) {
  //   const date = new Date();

  const messages = [
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

  return (
    <div className='main-container'>
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

const Message2 = ({ message }) => {
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

// PARA PINTAR TODO EL ARRAY:

/* const RemderAllMessage = props => {
  const allMessages = props.messages.map(message => (
    <Message2 message={message} />
  ));
  return allMessages;
}; */

function Header({ fecha }) {
  return <div className='header'>{fecha}</div>;
}

function Avatar({ name }) {
  return (
    <div className='avatar'>
      <img src='/avatars/456317.png' alt='imagen de usuario' />
      <span>{name}</span>
    </div>
  );
}

export default Chat;
