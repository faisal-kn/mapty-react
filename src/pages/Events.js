import { useState } from "react";

import Filterevents from "../components/Filterevents";
import PopularEvents from "../components/PopularEvents";
import AddEvent from "../components/AddEvent";
import Map from "../components/Map";

const Events = () => {
  return (
    <div>
      <div className="container-fluid " style={{ marginTop: "60px" }}>
        <div className="row pb-4">
          <div className="col-lg-4 aside-container">
            <Filterevents />
            <PopularEvents />
          </div>
          <AddEvent />
          <div class="col-lg-8">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
