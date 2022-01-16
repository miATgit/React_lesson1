import './App.css';
import {Message} from './components';

function App() {
  return (
    <div className="App">
      <Message className = "red" text = "hello world"/>
      <Message text = "random text"/>
    </div>
  );
}

export default App;
