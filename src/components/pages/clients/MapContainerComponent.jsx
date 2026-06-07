"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Add global style for normal cursor on map
const mapStyles = `
  .leaflet-container {
    cursor: default !important;
  }
  .leaflet-interactive {
    cursor: default !important;
  }
`;

function ChangeMapView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 0.75 });
  }, [center, zoom, map]);
  return null;
}

export default function MapContainerComponent({ center, zoom, markers }) {
  return (
    <>
      <style>{mapStyles}</style>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeMapView center={center} zoom={zoom} />

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.coords} icon={markerIcon}>
            <Popup>
              <span className="text-xs font-sans font-medium">Active User</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
