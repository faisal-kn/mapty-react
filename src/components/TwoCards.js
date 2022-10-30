import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function TwoCards(props) {
  return (
    <>
      <Container className="containerFluid" style={{ padding: "50px" }}>
        <Row className="row gx-5">
          <Col className="col-12 col-md-6 p-3 bg-light" style={{}}>
            <div>
              <h1
                className="text-10xl sm:text-5xl font-bold"
                style={{ padding: "20px", fontWeight: "700" }}
              >
                {props.h1}
              </h1>
              <h2
                style={{
                  paddingLeft: "20px",
                  opacity: "0.5",
                  fontSize: "130%",
                }}
              >
                {props.h2}
              </h2>
              <div>
                <p style={{ padding: "20px", fontSize: "large" }}>
                  {props.p}
                  <a href="/newTeam" style={{ textDecoration: "none" }}>
                    {props.a}
                  </a>
                </p>
                <a href="/signup">
                  <button
                    style={{ margin: "20px", fontSize: "large" }}
                    className="btn btn-outline-secondary mt-4"
                    type="submit"
                  >
                    {props.buttxt}
                  </button>
                </a>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-md-6 p-3 bg-light text-center" style={{}}>
            <div>
              <img className="img-fluid rounded" alt="" src={props.link} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TwoCards;
