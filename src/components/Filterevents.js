import { useState } from "react";

const Filterevents = () => {
  return (
    <div>
      <div className="container-fluid " style="margin-top:60px;">
        <div className="row pb-4">
          <div className="col-lg-4 aside-container">
            <div className="row first-row">
              <div className="col">
                <div className="card">
                  <div className="card-body" style="height:320px">
                    <h5 className="card-title">Filter events</h5>
                    <p className="card-text">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link mr-4"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Search By Hobbies
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link mr-4"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Search By City Name
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content mt-3" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div className="mb-3">
                            <label for="Select" className="form-label">
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
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <div className="d-flex align-items-end justify-content-center">
                            <div className="flex-grow-1 me-3">
                              <label className="form-label" for="lat">
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
                        </div>
                      </div>
                    </p>
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
