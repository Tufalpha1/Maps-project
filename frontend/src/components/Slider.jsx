import React from 'react'
import { useRef, useState } from 'react';

function Slider(props) {
  const [output, setOutput] = useState(1)
  
  //accessing the input tag
  const inputTag = useRef()
  
  function setValue(){

    //modifying 'output'
    setOutput(inputTag.current.value)

    //modifying state variable 'opacity'
    props.setOpacity(inputTag.current.value);
  }
    
  return (
    <div className="slider-wrapper">
    <input type="range"   min="0" max="1" id="opacity-slider" step="0.01" onChange={setValue} ref={inputTag}/>
    <output htmlFor="opacity-slider" id="slider-value" >{output}</output>
    </div>
  )
}

export default Slider