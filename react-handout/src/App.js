import React, { useState, useRef, useEffect, Component } from 'react';
import FunComp from './FunComp';
import ClassComp from './ClassComp';

function App() {
  const inputRef = useRef();
  const [stringIn, setStr] = useState();
  

  function handleOnchange() {
    const inputSrc = inputRef.current.value;
    if (inputSrc === '') return;
    setStr(inputSrc);

    //console.log(inputSrc);
  }
  return (
    <div className="App">
      <input ref={inputRef} type="text" onChange={handleOnchange} />
      <FunComp data={stringIn}/>
      <ClassComp data={stringIn}/>
    </div>
  );
  
}

export default App;
