import logo from './logo.svg';
import './App.css';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. y ver que pasa 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1> Hola {props.name} {props.surname} !</h1>
        <h2> Hola {props.children} !</h2>
        <p>Buenas {props.answere}</p>
        <BorderRed width={2} >Este es el children del componente</BorderRed>

      </main>
    </div>
  );
}


export const BorderRed = ({width, children}) => {
  const w = width ?? 10;
  return (
    <div style={{border:`${w}px dotted red`}}>
      {children ? children : null}
    </div>
  )
}

export default App;

