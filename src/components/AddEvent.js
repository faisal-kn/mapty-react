import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddEvent = ({ lat, lng, host, createMarker }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("dd/mm/yyyy");
  const [hobby, setHobby] = useState("Games");
  const [totalSpot, setTotalSpot] = useState(0);
  const [description, setDescription] = useState("");

  const formSubmitHandler = async () => {
    try {
      const form = new FormData();
      //   console.log(photo);
      //   form.append("photo", photo.files[0]);
      form.append("name", name);
      form.append("date", date);
      form.append("location", [lat, lng]);
      form.append("hobby", hobby);
      form.append("host", host);
      form.append("description", description);
      form.append("totalSpot", totalSpot);
      console.log([lat, lng]);
      const res = await fetch("http://localhost:3001/api/event/create-event", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        createMarker(data.data.newEvent);
        // myModal.hide();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action="#"
            class="form"
            id="form-event--data"
            onSubmit={formSubmitHandler}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12 me-3 pt-1">
                  <label class="form-label" for="lat">
                    Name
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class=" me-3 pt-1">
                  <label class="form-label" for="lat">
                    Date
                  </label>
                  <input
                    class="form-control"
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class=" me-3 pt-1">
                  <label for="Select" class="form-label">
                    Select most relevent hobbie
                  </label>
                  <select
                    id="hobbies"
                    class="form-select"
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
              </div>
              <div class="row">
                <div class="me-3 pt-1">
                  <label class="form-label" for="lat">
                    Host
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    id="host"
                    name="host"
                    required
                    disabled
                  />
                </div>
              </div>

              <div class="row">
                <div class="me-3 pt-1">
                  <label class="form-label" for="lat">
                    Total Spot
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    id="total"
                    min="1"
                    name="totalSpot"
                    value={totalSpot}
                    onChange={(e) => setTotalSpot(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="event-description">Event Description</label>
                <textarea
                  class="form-control"
                  id="event-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label>Upload Event Pictures</label>
                <input type="file" name="photo" id="photo" required />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEvent;
