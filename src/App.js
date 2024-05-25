import './App.css';
import React, { useState , createContext  } from 'react';
import Fahrenheit from './Fahrenheit';

export const Context1 = createContext();
function App (props) {
    const [inp,setinp]=useState('');
    
    const einput=(event)=>{
      setinp(event.target.value);
    
    }
  return (
    <Context1.Provider value={(inp*1.8)+32}>
    <div className='App'>
    <label>Enter temperature in Celsius:</label>
    <input type='text'  onChange={einput}></input>
    
    <Fahrenheit />
    </div>
    </Context1.Provider>
  );
}
export default App;

