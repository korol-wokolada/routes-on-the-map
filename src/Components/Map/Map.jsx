import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import React from "react";
import LocationMarker from "./userLocation/UserLocation";
import { useState } from "react";
import L from "leaflet";

import Routing from "./Routing";
import { useSelector } from "react-redux";
import { Alert } from "antd";

function Map() {
  const [map, setMap] = useState();
  const errors = useSelector((state) => state.route.error);

  const waypoints = useSelector((state) => state.route.routes.waypoints);

  const way = waypoints
    ? waypoints.map(({ location }) => {
        return location;
      })
    : null;

  return (
    <div className="wrapper">
      <MapContainer
        center={[59.84660399, 30.29496392]}
        zoom={13}
        scrollWheelZoom={true}
        whenCreated={(map) => setMap(map)}>
        <Routing waypoints={way} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
      </MapContainer>
      {errors ? <Alert type="error" message={errors} banner /> : null}
    </div>
  );
}

let defaultIcon = L.icon({
  iconUrl:
    "https://cdn.icon-icons.com/icons2/1364/PNG/512/maplocalization_89142.png",
  iconSize: [38, 38],
});
L.Marker.prototype.options.icon = defaultIcon;

export default Map;
