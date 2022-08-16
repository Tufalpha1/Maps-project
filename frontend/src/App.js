import * as React from 'react';
import Map, {Marker, Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoLocationSharp } from 'react-icons/io5';
function App() {
  return (
    <div className="App">
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
          url="https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif"
          coordinates={[
            [-80.425, 46.437],
            [-71.516, 46.437],
            [-71.516, 37.936],
            [-80.425, 37.936]
          ]}
        />
        <Layer
           id="overlay"
           source="map-source"
           type="raster"
           paint={{ "raster-opacity": 0.85 }}
        />
     </Map>
    </div>
  );
}

export default App;
