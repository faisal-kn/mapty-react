import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import axios from "axios";

const Filterevents = ({ filterMarkerHandler, setMapCenterCoords }) => {
  const [key, setKey] = useState("hobbies");
  const [hobby, setHobby] = useState("Games");
  const [city, setCity] = useState("");

  const hobbyEventHandler = async () => {
    try {
      const options = {
        url: `http://localhost:3001/api/event/get-event-by-hobby/${hobby}`,
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(options);
      if (res.data.status === "success") {
        filterMarkerHandler(res.data.data.eventByHobby);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const forwardGeocodeHandler = async () => {
    try {
      const string = `http://api.positionstack.com/v1/forward?access_key=fc9a1ebd02ce67ca55a38e4143527ec3&query=${city}`;
      const options = {
        url: string,
        method: "GET",
      };
      const res = await axios(options);
      const { latitude, longitude } = res.data.data[0];
      setMapCenterCoords(latitude, longitude);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="row first-row">
        <div className="col">
          <div className="card">
            <div className="card-body" style={{ height: "320px" }}>
              <h5 className="card-title">Filter events</h5>
              <span className="card-text">
                <Tabs
                  defaultActiveKey="hobbies"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="hobbies" title="Search By Hobbies">
                    <div className="mb-3">
                      <label htmlFor="Select" className="form-label">
                        Select your hobbies
                      </label>
                      <select
                        id="hobbies-select"
                        className="form-select"
                        value={hobby}
                        onChange={(e) => setHobby(e.target.value)}
                      >
                        <option>Games</option>
                        <option>coding meetups</option>
                        <option>Mixers</option>
                        <option>political gatherings</option>
                        <option>Major events</option>
                        <option>Educational</option>
                        <option>Friend meetups</option>
                        <option>Travelling</option>
                        <option>Random meetups</option>
                        <option>Hangouts</option>
                      </select>
                    </div>
                    <button
                      className="btn btn-outline-success mt-4"
                      type="submit"
                      onClick={hobbyEventHandler}
                    >
                      Find
                    </button>
                  </Tab>
                  <Tab eventKey="profile" title="Search By City Name">
                    <div className="d-flex align-items-end justify-content-center">
                      <div className="flex-grow-1 me-3">
                        <label className="form-label" htmlFor="lat">
                          City name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="lat"
                          name="firstname"
                          placeholder="city name"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-outline-success mt-4"
                      onClick={forwardGeocodeHandler}
                      type="submit"
                    >
                      Find
                    </button>
                  </Tab>
                </Tabs>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterevents;
