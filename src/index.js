import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BorderRed} from './App'
import Styles from './Styles';
import Chat from './Chat'

const name = 'Pepe'
const apellido = 'Rodrigez' 
//const answere = window.prompt('como te llamas?')
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
    <Chat/>
  </React.StrictMode>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
