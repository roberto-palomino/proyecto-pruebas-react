import React, { useState } from 'react';

export const ClickCounter = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Número de clicks: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>
    </div>
  );
};
