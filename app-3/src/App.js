import React, {useState} from 'react';
import ListInput from './components/list';
import './App.css';

function App() {
  const [arr] = useState(['Sushi','Audi R8','McLaren','Wagyu'])
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} type="text" /> 
        <ListInput user={userInput} />
      </header>
    </div>
  );
}

export default App;
