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
            
            lat:  -26.780000715868493,
            lng: -65.21857285879479,
          }}
          markers={[
            { lat: -26.823613715868493, lng:  -65.21757085879479 },
            { lat: -26.750057732168575, lng:-65.24977133181224 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}