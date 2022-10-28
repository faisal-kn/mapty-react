import { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const PopularEvents = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [renderedEvents, setRenderedEvents] = useState([]);

  const renderPopularEvents = (
    maxElement,
    currentPage,
    maxPerPage,
    data = []
  ) => {
    const start = (currentPage - 1) * maxPerPage;
    let end = start + maxPerPage;
    if (end > maxElement) {
      end = maxElement;
    }
    const temp = events.filter((event, i) => {
      if (i >= start && i < end) {
        return true;
      }
      return false;
    });
    setRenderedEvents(temp);
  };

  useEffect(() => {
    const maxElement = events.length;
    const maxPerPage = 2;
    if (maxElement > maxPerPage) {
      const totalPage = Math.ceil(maxElement / maxPerPage);
      setTotalPage(totalPage);
    }
    renderPopularEvents(maxElement, 1, maxPerPage, events);
  }, []);

  const leftEventHandler = (e) => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (currentPage === 1) {
      setCurrentPage(totalPage);
    }
    renderPopularEvents(events.length, currentPage, 2, events);
  };

  const rightEventHandler = (e) => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    } else if (currentPage === totalPage) {
      setCurrentPage(1);
    }
    renderPopularEvents(events.length, currentPage, 2, events);
  };
  return (
    <div className="row second-row mt-2">
      <div className="col">
        <div className="card">
          <div className="cb">
            <div className="card-body" style={{ height: "530px" }}>
              <h5 className="card-title text-center">CURRENT POPULAR EVENTS</h5>
              <div id="popular-events">
                {renderedEvents.map((event, i) => {
                  return (
                    <div key={i}>
                      <div className="row">
                        <div className="col d-flex align-items-center">
                          <img
                            src={`uploads/${event.photo}`}
                            width="222"
                            height="125"
                            alt="img of event"
                            className="image1"
                          />
                        </div>
                        <div className="col">
                          <span>{event.date.substring(0, 10)}</span>
                          <p style={{ fontSize: "14px" }}>${event.name}</p>
                          <h5 style={{ fontSize: "14px" }}>
                            {`${event.location[0]}, ${event.location[1]}`}
                          </h5>
                          <p style={{ fontSize: "14px" }}>
                            1 attendee -
                            <span style={{ color: "blue" }}>
                              {" "}
                              ${event.totalSpot} spots left
                            </span>
                          </p>
                          <a href={`/events/${event._id}`}>
                            <button
                              className="btn btn-success"
                              style={{ marginBottom: "10px" }}
                              id={`${event._id}`}
                            >
                              {" "}
                              Get to know more
                            </button>
                          </a>
                        </div>
                        <hr
                          style={{
                            width: "80%",
                            margin: "auto",
                            marginBottom: "9px",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pagination-container">
                <div
                  className="pagination-container clickme"
                  style={{
                    border: "3px solid black",
                    borderRadius: "20px",
                  }}
                >
                  <div id="left-btn" onClick={leftEventHandler}>
                    <AiFillLeftCircle />
                  </div>
                  <span id="page">1</span>
                  <pre> </pre>of<pre> </pre>
                  <span id="max-page">{totalPage}</span>
                  <div id="right-btn" onClick={rightEventHandler}>
                    <AiFillRightCircle />
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
