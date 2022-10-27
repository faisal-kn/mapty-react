import { useState } from "react";

const PopularEvents = () => {
  return (
    <div className="container-fluid " style={{ marginTop: "60px" }}>
      <div className="row pb-4">
        <div className="col-lg-4 aside-container">
          <div className="row second-row mt-2">
            <div className="col">
              <div className="card">
                <div className="cb">
                  <div className="card-body" style={{ height: "530px" }}>
                    <h5 className="card-title text-center">
                      CURRENT POPULAR EVENTS
                    </h5>
                    <div id="popular-events"></div>
                    <div className="pagination-container">
                      <div
                        className="pagination-container clickme"
                        style={{
                          border: "3px solid black",
                          borderRadius: "20px",
                        }}
                      >
                        <div id="left-btn">
                          <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <span id="page">1</span>
                        <pre> </pre>of<pre> </pre>
                        <span id="max-page">2</span>
                        <div id="right-btn">
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
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

export default PopularEvents;
