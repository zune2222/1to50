import React, { useState  } from "react";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addrank from "./Addrank";
function Rank() {
    return  (
        <div>
            <Menu></Menu>
            <div className="container">
                <div className="d-flex justify-content-center my-4">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div style={{ marginTop: "25px" }}></div>
                        <div style={{ fontSize: "25px" }}>
                            <div>
                                <Addrank></Addrank>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank;