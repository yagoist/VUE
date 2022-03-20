import './App.css';
import Message from './Message';

const simpleText = "wonderfull!!!!"



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My Fist React App
        <h3>Hello, {props.name}</h3>        
       </header>
       <Message text={simpleText}/>
    </div>
  );
}

export default App;
