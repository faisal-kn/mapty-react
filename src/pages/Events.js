import { useState } from "react";

import Filterevents from "../components/Filterevents";
import PopularEvents from "../components/PopularEvents";
import AddEvent from "../components/AddEvent";

const Events = () => {
  return (
    <div>
      <Filterevents />
      <PopularEvents />
      <AddEvent />
    </div>
  );
};

export default Events;
