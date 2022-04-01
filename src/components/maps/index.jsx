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
          zoom={12.5}
          center={{
            lat: -26.79287,
            lng: -65.24733,
          }}
          markers={[
            { lat: -26.82372, lng: -65.21762 },
            { lat: -26.75287, lng: -65.24733 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}
