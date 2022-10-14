import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import logo from './logo.svg'
import { Power3 } from 'gsap/all';

function App() {
  const logoItem = useRef(null);


  useEffect(() =>{
    console.log(logoItem);
    gsap.to(
      '.App-logo',
      {
        rotate:360,
        opacity: 1,
        duration:10
      }
    )
  },[])

  return (
    <div className='App'>
      <header className='App-header'>
        <img 
          ref={logoItem}  
          src={logo}
          className='App-logo' 
          alt='logo' />
      </header>
    </div>
  );
}

export default App;