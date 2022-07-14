import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
import "./styles.css";

export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAFX4AlWLxErTDq4pVxy4A2Ja95-NtZmD4"}
          style={{ height: "100%", width: "100%" }}
          zoom={12}
          center={{
            
            lat:  -26.809409994496434,
            lng: -65.29084406244296,
          }}
          markers={[
            { lat: -26.80643, lng:  -65.29383 },
            { lat: -26.8505938, lng: -65.3240267 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}
