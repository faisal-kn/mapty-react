import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const Filterevents = () => {
  const [key, setKey] = useState("hobbies");

  return (
    <div>
      <div className="container-fluid " style={{ marginTop: "60px" }}>
        <div className="row pb-4">
          <div className="col-lg-4 aside-container">
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
                            <select id="hobbies-select" className="form-select">
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
                            id="secondButton"
                            type="submit"
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
                              /> 
                            </div>
                          </div>
                          <button
                            className="btn btn-outline-success mt-4"
                            id="thirdButton"
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
        </div>
      </div>
    </div>
  );
};

export default Filterevents;
