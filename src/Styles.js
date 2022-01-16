import * as React from "react";
import "./box-styles.css";

// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`




//primera parte del ejercicio, estos componentes son estaticos 
const smallBox = <div className='box--small box' style={{backgroundColor:'lightblue', fontStyle:'italic'}}>small lightblue box</div>
const mediumBox = <div className='box--medium box' style={{backgroundColor:'pink', fontStyle:'italic'}}>medium pink box</div>  
const largeBox = (
  <div 
    className='box--large box' 
    style={{backgroundColor:'orange', fontStyle:'italic'}}
  >large orange box</div>
);

//De esta manera generamos un componente que puede variar dependiendo de sus props cuanod llamamos al componente 
const Box = ({size, color, children}) => {
  return (
    <div className= {`${size} box` } style={{backgroundColor: color, fontStyle:'italic'}}>{children}</div>
  )
}


function Styles() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size='box--medium' color='yellow'>Hola soy box</Box>
      <Box size='box--small' color='#900'>Hola soy otro box diferente</Box>
      
    </div>
  );
}

export default Styles;
