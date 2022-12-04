import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CustomMarker = ({ position, popupDetail }) => {
  const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
  return (
    <Marker position={position} icon={icon}>
      <Popup className="cycling-popup">
        <a
          href={`/events/${popupDetail._id}`}
          style={{ textDecoration: "none" }}
        >
          <h5>{popupDetail.name}</h5>
        </a>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
