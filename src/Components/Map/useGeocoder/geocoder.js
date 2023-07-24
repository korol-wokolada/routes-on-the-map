/* eslint-disable react-hooks/rules-of-hooks */
import L from "leaflet";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
// eslint-disable-next-line no-lone-blocks

export default function Geocoder() {
  const map = useMap();

  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: true,
    })
      .on("markgeocode", function (e) {
        let latLng = e.geocode.center;

        L.marker(latLng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, [map]);

  return null;
}
