import React from "react";
import OneToFifty from "./OneToFifty";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center my-3">
          <div className="col-12 col-md-6 col-lg-6">
            <OneToFifty></OneToFifty>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;