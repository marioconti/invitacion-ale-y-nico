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
            lat: -26.82519,
            lng: -65.27113,
          }}
          markers={[
            { lat: -26.85401, lng: -65.3155 },
            { lat: -26.82519, lng: -65.27113 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}
