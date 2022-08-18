import { useState } from 'react';
import Map, {Marker, Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoLocationSharp } from 'react-icons/io5';
import Slider from './components/Slider';
import './styles/styles.css'

function App() {
  const [opacity, setOpacity]= useState(0.85)
  
      function changeOpacity(getOpacity){
        setOpacity(getOpacity)
       
      }
  return (
    <div className="App">
          <h1 class="heading">Map image overlay</h1>
     <Map
     initialViewState={{
        longitude: 73.1730,
        latitude: 33.6109,
        zoom: 12
      }}
      style={{width: "70vw", height: "70vh", border: "2px solid #666" , margin:"auto", padding:"10px"}}
      mapStyle="mapbox://styles/tufalpha1/cl6t8dgis001g15mrxp9urf9n"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >
        <Marker longitude={73.1730} latitude={33.6109} anchor="bottom" >
        <IoLocationSharp 
        style={{fontSize: "3vw", color: "red"}}
        />
        </Marker>
        <Source
          id="map-source"
          type="image"
          url="https://i.postimg.cc/dQNDzHV9/gulberg.jpg"
          coordinates={[
            [73.18068027777778, 33.5985833],
            [73.20764416666667, 33.5985833],
            [73.20764444444444, 33.6154667],
            [73.18068027777778, 33.6154667]
          ]}
        />
        <Layer
           id="overlay"
           source="map-source"
           type="raster"
           paint={{ "raster-opacity": opacity }}
        />
     </Map>
     <Slider
        changeOpacity = {changeOpacity}
     />  
    </div>
  );
}


export default App;
