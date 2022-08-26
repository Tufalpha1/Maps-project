import React from 'react'
import { useState } from 'react';
import '../styles/styles.css'

const Uploader = (props) => {
    //setInput state
    const [input, setInput] = useState(""); 

    const onInputHandler = () => {
        props.onInput(input);
        }
  return (
    <>
     <div className='inputs'>
       <label htmlFor='firstcorner'>Enter coordinates of 1st corner:</label>
       <input type='text' value= {input} name='firstlat' placeholder='latitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/> <input type='text' value={input} name='firstlong' placeholder='longitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/><br />
       <label htmlFor='secondcorner'>Enter coordinates of 2nd corner:</label>
       <input type='text' value= {input} name='secondlat' placeholder='latitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/> <input type='text' value={input} name='secondlong' placeholder='longitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/><br />
       <label htmlFor='thirdcorner'>Enter coordinates of 3rd corner:</label>
       <input type='text' value= {input} name='thirdlat' placeholder='latitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/> <input type='text' value= {input} name='thirdlong' placeholder='longitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/><br />
       <label htmlFor='fourthcorner'>Enter coordinates of 4th corner:</label>
       <input type='text' value= {input} name='fourthlat' placeholder='latitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/> <input type='text' value= {input} name='fourthlong' placeholder='longitude' onChange={(e) => setInput(e.target.value)} onInput={onInputHandler}/><br />
       <input type='submit' />
     </div>
    </>
  )
}

export default Uploader
