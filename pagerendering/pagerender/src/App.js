
import './App.css';
import {useState} from 'react';
function App() {
  const [counter, setCounter]= useState(0);
  const setCount=()=>{
    setCounter(counter +1);
  }
  const ids=[1,2,3,5,4,5,6];
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={setCount}>increment</button>
      {
        ids.map((id,key)=>{
          return (
            <li key={toString(key)}>{id}</li>
          )
        })
      }
    </div>
  );
}

export default App;
