import React, { useState } from 'react'
import $ from 'jquery';


function slider(props) {

  // const [state, setState] = useState();

  // const setValue = (e)  =>{
  //   setState(e.current.val)
  // }
  function setValue(e){
    props.changeOpacity(e.current.val)
  }

  $('#opacity-slider').on("change mousemove", function() {
    $('#slider-value').html($(this).val());
    console.log($(this).val())
    props.changeOpacity($(this).val());
  });
    
  return (
    <div class="slider-wrapper">
    <input type="range"   min="0" max="1" id="opacity-slider" step="0.01" onChange={setValue}/>
    <output for="opacity-slider" id="slider-value" >0.85</output>
    </div>
  )
}

export default slider
