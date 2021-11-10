import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/database'
function Addrank() {
    const [rank,setRank]=useState(new Array());
    const makeRank = () =>{
        var rankCnt = firebase.database().ref('user/');
        let ary = new Array();
        rankCnt.get().then(data => {
            data.forEach((value) => {
                ary.push(value.val());
                ary.sort(function (a, b) {
                    return a.time - b.time;
                });
            })
            setRank(ary);
        })
    }
    console.log("first");
    useEffect(() => {
        makeRank();
        console.log(rank);
    },[])
    return (
        rank.map((data, index) => (<div className="rankSt fnt" key={index}>{data.name} {data.time}</div>))
    )
}

export default Addrank;