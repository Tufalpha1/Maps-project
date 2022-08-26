import { useState } from 'react';
import Map, {Marker, Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoLocationSharp } from 'react-icons/io5';
import Slider from './Slider';
import '../styles/styles.css'
import Uploader from './Uploader';


function App() {

  //setOpacity states
  const [opacity, setOpacity]= useState(1)
  //setUserInput states
  const [userInput, setUserInput]= useState("")

  //Creating a function that handles setting the state 
  const inputHandler = (userInput) => {

    //modifying state variable 'userInput'
    setUserInput(userInput);
    }
  
  return (
    <div className="App">
        <h1 class="heading">Map image overlay</h1>
        <Map
        initialViewState={{
          longitude: 73.173,
          latitude: 33.6109,
          zoom: 12,
        }}
        style={{
          width: "50vw",
          height: "50vh",
          border: "2px solid #666",
        }}
        mapStyle="mapbox://styles/tufalpha1/cl6t8dgis001g15mrxp9urf9n"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        >
        <Marker longitude={73.173} latitude={33.6109} anchor="bottom">
          <IoLocationSharp style={{ fontSize: "3vw", color: "red" }} />
        </Marker>
        <Source
          onInput= {inputHandler}
          id="map-source"
          type="image"
          url="https://i.postimg.cc/dQNDzHV9/gulberg.jpg"
          coordinates={[
            //these are the coordinates that i had previously... do not delete them
            // [73.18068027777778, 33.5985833],
            // [73.20764416666667, 33.5985833],
            // [73.20764444444444, 33.6154667],
            // [73.18068027777778, 33.6154667],
            [Number(userInput), Number(userInput)],
            [Number(userInput), Number(userInput)],
            [Number(userInput), Number(userInput)],
            [Number(userInput), Number(userInput)],
          ]}
        />
        <Layer
          id="overlay"
          source="map-source"
          type="raster"
          //typecasting opacity, since typeof(state_variables) is string by default
          paint={{ "raster-opacity": Number(opacity) }}
        />
      </Map>
      {/* passing setOpacity to slider */}
      <Slider setOpacity={setOpacity} />
      <Uploader  />
    </div>
  );
}


export default App;
