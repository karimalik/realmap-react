import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import * as React from "react";
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";

function App() {
  const [lng, setLng] = useState(9.7679);
  const [lat, setLat] = useState(4.0511);

  return (
    <>
      <div>
        <h1 style={{ textDecoration: "underline", textTransform: "uppercase" }}>
          Real Map
        </h1>
        <Map
          mapboxAccessToken="pk.eyJ1IjoieGRjb25kb3IiLCJhIjoiY2xvaTllcGk1MWs0OTJqcXBnZjlyOTQ0dSJ9.Pna-RQr8jV9-YWwezCDLPA" //your access token
          style={{
            width: 1500,
            height: 1000,
            borderRadius: "0px",
            border: "2px solid ",
          }}
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        >
          <Marker
            longitude={lng}
            latitude={lat}
            offsetTop={-20}
            offsetLeft={-10}
          >
            <div style={{ color: "red", fontSize: 24 }}>📍</div>
          </Marker>

          <NavigationControl position="bottom-right" />

          <GeolocateControl position="bottom-right" />

          <FullscreenControl />
        </Map>
      </div>
    </>
  );
}

export default App;
