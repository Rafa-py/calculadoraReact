import './tecla.css';
import React from "react";

function Tecla({value, onClick}) {

    
    const handleClick = () => {
        onClick(value); 
      };


  return (
    <button onClick={handleClick} className='btn'>{value}</button>
  );
}

export default Tecla;
