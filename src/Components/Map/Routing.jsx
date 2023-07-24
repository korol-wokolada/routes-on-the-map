import L from "leaflet";

import "leaflet-routing-machine";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const Routing = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true,
      show: false,
    }).addTo(map);
    return () => map.removeControl(routingControl);
  }, [map, waypoints]);

  return null;
};

export default React.memo(Routing);
