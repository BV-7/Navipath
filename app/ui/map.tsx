'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import L from '../../node_modules/leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: './public/marker-icon-2x.png',
  iconUrl: "./public/marker-icon.png",
  shadowUrl: './public/marker-shadow.png',
});

export default function Map() {
  return (
    <div className="w-[60vw] h-[50vh] m-0 rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[12.882505, 80.249657]}
        zoom={14.5}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.882505, 80.249657]}>
          <Popup>HO</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
