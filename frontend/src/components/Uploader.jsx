import React from "react";
import "../styles/styles.css";
import { useRef } from "react";

const Uploader = (props) => {

  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const fifthInput = useRef()
  const sixthInput = useRef()
  const seventhInput = useRef()
  const eighthInput = useRef()

  const setInput = ()=>{
    const coords =[
      firstInput.current.value,
      secondInput.current.value,
      thirdInput.current.value,
      fourthInput.current.value,
      fifthInput.current.value,
      sixthInput.current.value,
      seventhInput.current.value,
      eighthInput.current.value
    ];
    props.setUserInput(coords);
  }


  return (
    <>
      <div className="inputs">
        <label htmlFor="firstcorner">Enter coordinates of 1st corner:</label>
        <input
          ref={firstInput}
          type="text"
          name="firstlat"
          placeholder="latitude"
          onChange={setInput}
        />
        <input
          ref={secondInput}
          type="text"
          name="firstlong"
          placeholder="longitude"
          onChange={setInput}
        />
        <br />
        <label htmlFor="secondcorner">Enter coordinates of 2nd corner:</label>
        <input
          ref={thirdInput}
          type="text"
          name="secondlat"
          placeholder="latitude"
          onChange={setInput}
        />
        <input
          ref={fourthInput}
          type="text"
          name="secondlong"
          placeholder="longitude"
          onChange={setInput}
        />
        <br />
        <label htmlFor="thirdcorner">Enter coordinates of 3rd corner:</label>
        <input
          ref={fifthInput}
          type="text"
          name="thirdlat"
          placeholder="latitude"
          onChange={setInput}
        />
        <input
          ref={sixthInput}
          type="text"
          name="thirdlong"
          placeholder="longitude"
          onChange={setInput}
        />
        <br />
        <label htmlFor="fourthcorner">Enter coordinates of 4th corner:</label>
        <input
          ref={seventhInput}
          type="text"
          name="fourthlat"
          placeholder="latitude"
          onChange={setInput}
        />
        <input
          ref={eighthInput}
          type="text"
          name="fourthlong"
          placeholder="longitude"
          onChange={setInput}
        />
      </div>
    </>
  );
};

export default Uploader;
