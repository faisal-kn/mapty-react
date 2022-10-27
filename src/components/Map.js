import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  useEffect(() => {
    const setCoords = (position) => {
      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLng(longitude);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoords, function () {
        alert("Could not get your location");
      });
    }
  }, []);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{height: "100vh"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
