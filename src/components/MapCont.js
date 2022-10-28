import { MapContainer, TileLayer, useMapEvents, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import CustomMarker from "./CustomMarker";

const MapCont = ({ isAddEvent, openModal, markers }) => {
  const [centerLat, setLat] = useState(14.4484);
  const [centerLng, setLng] = useState(79.9888);

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

  const GetClickedPosition = () => {
    const map = useMapEvents({
      click: (e) => {
        openModal(e.latlng.lat, e.latlng.lng);
      },
    });
    return <div></div>;
  };

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "96vh" }}
    >
      {isAddEvent && <GetClickedPosition />}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, i) => {
        return (
          <CustomMarker
            position={[marker.location[0], marker.location[1]]}
            popupDetail={marker}
            key={i}
          ></CustomMarker>
        );
      })}
    </MapContainer>
  );
};

export default MapCont;
