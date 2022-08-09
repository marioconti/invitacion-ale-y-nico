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
          zoom={12.6}
          center={{
            lat:  -26.88001803050106,
            lng: -65.71152637413739,
          }}
          markers={[
            {  lat:  -26.853478033050106, lng: -65.71152637413739},
            { lat: -26.851523284050444, lng:-65.70982623414076 },
          ]}
          className="container-map"
        />
      </div>
    );
  }
}