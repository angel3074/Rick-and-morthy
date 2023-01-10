import React from 'react';
import { useState } from 'react';



const Pollito = () => {

  const [showPollito, setShowPollito] = useState('')
  const [inputPollito, setInputPollito] = useState('');
  


  const changePollitoStatus = () => {
    setShowPollito(inputPollito === "pollito" ? <img src="https://cn.i.cdn.ti-platform.com/content/1/tweety-80-anos/showpage/ar/square.291b9207.png?imwidth=420" alt="pollito" /> : 'inserte pollito');
  }
  
  console.log(showPollito);
  return (
    <div>
      <h1>SOY UN POLLITO</h1>
 
      <input 
      type="text" 
      value={inputPollito}
      onChange={e => setInputPollito(e.target.value)}
      />

      <button onClick={changePollitoStatus}>Show Pollito</button>

      {showPollito}

    </div>
  );
};

export default Pollito;