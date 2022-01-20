import React, { useState } from 'react';

/* function Input() {
  return (
    <div className='entrada'>
      <label for='text'>Texto:</label>
      <input type='text' id='text' />
      <button>Enviar</button>
    </div>
  );
} */
const ClickCounter2 = ({ initValue }) => {
  const [contador, setContador] = useState(initValue ?? 0);
  const updateCounter = event => {
    console.log('En la función de updateCounter', event);
    setContador(contador + 1);
    console.log('Contador después de setContador updateCounter', contador);
  };

  console.log('Valor del contador antes de return', contador);
  return (
    <div>
      <h1>Número de clicks: {contador}</h1>
      <button onClick={updateCounter}>Click!</button>
    </div>
  );
};
