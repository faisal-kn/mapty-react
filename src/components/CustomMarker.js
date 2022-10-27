import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CustomMarker = ({ position, popupDetail }) => {
  const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <a href={`/events/${popupDetail._id}`}>
          <h3>{popupDetail.name}</h3>
        </a>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
