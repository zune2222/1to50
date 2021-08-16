import React, { useState } from "react";
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/database'

let ary = new Array();
function Rank() {
    /*const [rank, rankSet] = useState([]);
    var rankCnt = firebase.database().ref('user/');
    rankCnt.on('child_added', (data) => {
        ary.push(data.val());
    });
    console.log(ary.length);
    console.log(ary);
    for(var i=0;i<ary.length;i++){
        const user={
            name:ary[i].name,
            time:ary[i].time
        }
        rankSet([...rank,user])
    }*/
    return (
        <div>
            <Menu></Menu>
            <div className="container">

                <div className="d-flex justify-content-center my-4">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div style={{ marginTop: "25px" }}></div>
                        <div style={{ fontSize: "100px" }}>개발중</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank;