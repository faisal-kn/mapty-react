import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParticularEvent = () => {
  const [event, setEvent] = useState({});
  const { eventid } = useParams();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const options = {
          url: `http://localhost:3001/api/event/one-event/${eventid}`,
          method: "GET",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios(options);
        console.log(res);
        if (res.data.status === "success") {
          setEvent(res.data.data.event);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getEvent();
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: "50px", textAlign: "center" }}
      >
        <div className="row">
          <h1>EVENT DETAILS</h1>
        </div>
      </div>

      <div>
        <div className="container-fluid" style={{ padding: "50px" }}>
          <div className="row gx-5">
            <div className="col-12 col-md-6 p-3 bg-light">
              <h1
                className="text-10xl sm:text-5xl font-bold"
                data-testid="search-intro-title"
                style={{ padding: "20px", fontWeight: "700" }}
              >
                {event.name}
              </h1>
              <div>
                <p style={{ padding: "20px", fontSize: "large" }}>
                  Location :{event.location}
                  <br />
                  <br />
                  Date : {event.date} <br />
                  <br />
                  Attendees : {event.attendees} <br />
                  <br />
                  Hobby : {event.hobby} <br />
                  <br />
                  Total Spot : {event.totalSpot}
                  <br />
                  <br />
                  Description : {event.description}
                </p>
                <button
                  style={{ margin: "20px", fontSize: "large" }}
                  className="btn btn-outline-secondary mt-4"
                  id="firstButton"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </div>

            <div
              id="photo"
              className="col-12 col-md-6 p-3 bg-light text-center"
            >
              <div className="col d-flex align-items-center">
                <img src={`/upload/${event.photo}`} alt="" className="image1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticularEvent;
