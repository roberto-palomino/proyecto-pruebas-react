import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App';

import { BorderRed } from './App';
import Styles from './Styles'; */
// import App from './ListKeyKO';
import Chat from './Chat';
// import NumberList from './listas';

/**
 * ##########################
 * ## Ejemplos que hacemos ##
 * ##########################
 */

/* dentro de <React.StrictMode> //(esto es el ejemplo primero)

  
      <BorderRed width={20}>    
        <App name={name} surname="Rodolfo" answere={answere}>esto es un children (prop que hemos importado de app)</App>
      </BorderRed>
   

       <Styles></Styles>

 */

ReactDOM.render(
  <React.StrictMode>
    <Chat />
    {/* <App /> */}
    {/* <NumberList /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
