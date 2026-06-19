"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const mapStyles = `
  .leaflet-container {
    cursor: default !important;
  }
  .leaflet-interactive {
    cursor: default !important;
  }
`;

export default function MapContainerComponent({ center, zoom, markers }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = L.map(container, { scrollWheelZoom: true }).setView(center, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    markers.forEach((marker) => {
      L.marker(marker.coords, { icon: markerIcon })
        .addTo(map)
        .bindPopup('<span style="font-size:12px;font-weight:500">Active deployment</span>');
    });

    requestAnimationFrame(() => {
      map.invalidateSize();
    });

    return () => {
      map.remove();
      container.replaceChildren();
    };
  }, [center, zoom, markers]);

  return (
    <>
      <style>{mapStyles}</style>
      <div ref={containerRef} className="h-full w-full" style={{ zIndex: 1 }} />
    </>
  );
}
