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
  const [userInput, setUserInput]= useState([])
  
  const [imageUrl, setImageUrl]= useState("")

  return (
    <div className="App">
      <h1 className="heading">Map image overlay</h1>
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
          id="map-source"
          type="image"
          url= {imageUrl}   //https://i.postimg.cc/dQNDzHV9/gulberg.jpg
          coordinates={[
            //these are the coordinates that i had previously... do not delete them
            // [73.18068027777778, 33.5985833],
            // [73.20764416666667, 33.5985833],
            // [73.20764444444444, 33.6154667],
            // [73.18068027777778, 33.6154667],
            [Number(userInput[0]), Number(userInput[1])],
            [Number(userInput[2]), Number(userInput[3])],
            [Number(userInput[4]), Number(userInput[5])],
            [Number(userInput[6]), Number(userInput[7])],
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
      <Slider setOpacity={setOpacity} />
      <Uploader setUserInput={setUserInput} setImageUrl={setImageUrl}/>
    </div>
  );
}


export default App;
