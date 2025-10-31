import React from 'react'
import { useState } from 'react';

const StateHanling = () => {
    const [counter,setcounter]=useState(0);
    function increase(){
        setcounter(counter+1);
    }
    function decrease(){
        setcounter(counter-1);
    }
  return (
    <div>
      <h2>counter value={counter}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default StateHanling
