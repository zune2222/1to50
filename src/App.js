import React, { useState } from "react";
import OneToFifty from "./OneToFifty";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalClass from "./Modal";
function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [time, setTime] = useState(0);
  const timeSet = (timeValue) => setTime(timeValue);
  return (
    <div>
      <Menu></Menu>
      <div className="container">
        <div className="d-flex justify-content-center my-4">
          <div className="col-12 col-md-8 col-lg-8">
            <div style={{ marginTop: "25px" }}></div>
            <ModalClass
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              time={time}
            ></ModalClass>
            <OneToFifty
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              time={timeSet}
            ></OneToFifty>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
