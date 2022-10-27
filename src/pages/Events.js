import { useState, useEffect, useCallback } from "react";

import Filterevents from "../components/Filterevents";
import PopularEvents from "../components/PopularEvents";
import AddEvent from "../components/AddEvent";
import MapCont from "../components/MapCont";

const Events = () => {
  const [addEvent, setAddEvent] = useState(false);
  const [clickedLat, setClickedLat] = useState(null);
  const [clickedLng, setClickedLng] = useState(null);
  const [show, setShow] = useState(false);
  const [markers, setMarker] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (eventLat, eventLng) => {
    if (eventLat != null && eventLng != null) {
      setClickedLat(eventLat);
      setClickedLng(eventLng);
      setShow(true);
      setAddEvent(false);
    }
  };

  const addMarkerHandler = useCallback((ele) => {
    setMarker([...markers, ele]);
  });

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/event/all-events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.status === "success") {
          data.data.events.forEach((ele) => {
            addMarkerHandler(ele);
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllEvents();
  }, [addMarkerHandler]);

  return (
    <div>
      <div className="container-fluid " style={{ marginTop: "60px" }}>
        <div className="row pb-4">
          <div className="col-lg-4 aside-container">
            <Filterevents />
            <div className="text-center " id="add-new-event">
              <button
                type="button"
                className="btn btn-outline-success mt-4 mb-3"
                id="fourthButton"
                onClick={() => setAddEvent(true)}
              >
                Create Event
              </button>
            </div>
            <PopularEvents />
          </div>
          <AddEvent
            lat={clickedLat}
            lng={clickedLng}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            addMarkerHandler={addMarkerHandler}
          />
          <div className="col-lg-8">
            <MapCont
              isAddEvent={addEvent}
              openModal={openModal}
              markers={markers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
