
import React, { useContext } from "react";
import { Context1 } from './App.js';
// import {App} from '/App.js';

function Fahrenheit (props){
    const celsiusval = useContext(Context1);
    return(<div style={{color:"white"}}>
    
    <label>Temperature in Fahrenheit:</label>
    <input type='text'  value={celsiusval}></input>
    {celsiusval>=200 ? <h3>Water will boil at {celsiusval}'F</h3>:<h3>Water WillNot Boil at {celsiusval}'F</h3>}
    </div>);
}

export default Fahrenheit;