"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/ui/SectionHeader";
import "leaflet/dist/leaflet.css";

const NEPAL_CENTER = [28.3949, 84.124];
const NEPAL_ZOOM = 7;

const NEPAL_POLYGON = [
  [30.42, 81.03],
  [30.38, 81.41],
  [30.32, 81.99],
  [30.1, 82.1],
  [29.97, 82.15],
  [29.87, 82.93],
  [29.72, 83.14],
  [29.63, 83.39],
  [29.44, 83.57],
  [29.35, 83.9],
  [29.1, 84.01],
  [28.99, 84.1],
  [28.8, 84.23],
  [28.61, 84.47],
  [28.42, 84.61],
  [28.33, 85.09],
  [28.18, 85.19],
  [27.99, 85.29],
  [27.88, 85.72],
  [27.75, 85.96],
  [27.69, 86.37],
  [27.52, 86.56],
  [27.42, 86.75],
  [27.3, 87.08],
  [27.29, 87.35],
  [27.34, 87.71],
  [27.46, 87.92],
  [27.55, 88.05],
  [27.45, 88.18],
  [27.22, 88.07],
  [26.97, 87.99],
  [26.79, 87.85],
  [26.63, 87.38],
  [26.58, 87.09],
  [26.52, 86.73],
  [26.46, 86.32],
  [26.44, 86.01],
  [26.39, 85.59],
  [26.38, 85.2],
  [26.41, 84.8],
  [26.46, 84.42],
  [26.51, 84.07],
  [26.58, 83.73],
  [26.63, 83.38],
  [26.7, 83.0],
  [26.77, 82.65],
  [26.84, 82.3],
  [26.92, 81.95],
  [27.03, 81.58],
  [27.19, 81.22],
  [27.38, 81.0],
  [27.65, 80.57],
  [27.88, 80.24],
  [28.12, 80.05],
  [28.38, 80.32],
  [28.68, 80.48],
  [28.96, 80.85],
  [29.25, 81.0],
  [29.56, 80.93],
  [29.87, 81.03],
  [30.18, 81.03],
  [30.42, 81.03],
];

function pointInPolygon(lat, lng, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [yi, xi] = polygon[i];
    const [yj, xj] = polygon[j];
    const intersect = yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function generateNepalMarkers(count) {
  const LAT_MIN = 26.35;
  const LAT_MAX = 30.45;
  const LNG_MIN = 80.05;
  const LNG_MAX = 88.2;
  const markers = [];
  let attempts = 0;

  while (markers.length < count && attempts < count * 20) {
    attempts++;
    const lat = LAT_MIN + Math.random() * (LAT_MAX - LAT_MIN);
    const lng = LNG_MIN + Math.random() * (LNG_MAX - LNG_MIN);
    if (pointInPolygon(lat, lng, NEPAL_POLYGON)) {
      markers.push({ id: markers.length, coords: [lat, lng] });
    }
  }

  return markers;
}

const MapComponent = dynamic(() => import("./MapContainerComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[360px] w-full items-center justify-center rounded-xl bg-slate-100 sm:h-[420px]">
      <span className="text-sm text-slate-400">Loading map…</span>
    </div>
  ),
});

export default function CityUserMap() {
  const markers = useMemo(() => generateNepalMarkers(48), []);

  return (
    <section id="clients-map" className="section-shell border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Coverage"
          title="Nationwide"
          highlight="presence"
          className="mb-8 max-w-xl"
        />

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="h-[360px] w-full sm:h-[420px]">
            <MapComponent center={NEPAL_CENTER} zoom={NEPAL_ZOOM} markers={markers} />
          </div>
        </div>
      </div>
    </section>
  );
}
