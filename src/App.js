import logo from './logo.svg';
import './App.css';
import React, { useContext } from "react";
import Tecla from './components/tecla';
function App() {

  let [result, setResult] = React.useState("");
  let [finalResult, setFinalResult] = React.useState(0);

  let handleClick = (value)=>{
    setResult(result + value)
    setFinalResult(value)
  }
  let getResult = ()=>{
    setFinalResult(eval(result))
    setResult("")
  }
  return (
    <div className='container'>
        <input className='input' value={finalResult}/>
        <div className='Calculadora'>
          <Tecla onClick={handleClick} value="0"/>
          <Tecla onClick={handleClick} value="1"/>
          <Tecla onClick={handleClick} value="2"/>
          <Tecla onClick={handleClick} value="3"/>
          <Tecla onClick={handleClick} value="4"/>
          <Tecla onClick={handleClick} value="5"/>
          <Tecla onClick={handleClick} value="6"/>
          <Tecla onClick={handleClick} value="7"/>
          <Tecla onClick={handleClick} value="8"/>
          <Tecla onClick={handleClick} value="9"/>
          <Tecla onClick={getResult} value="="/>
          <Tecla onClick={handleClick} value="+"/>
          <Tecla onClick={handleClick} value="-"/>
          <Tecla onClick={handleClick} value="*"/>
          <Tecla onClick={handleClick} value="/"/>
        </div>
    </div>
  );
}

export default App;
