import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/database";
import { useQuery } from "react-query";
import ReactLoading from "react-loading";
function Addrank() {
  const makeRank = async () => {
    var rankCnt = firebase.database().ref("user/");
    let data = new Array();
    await rankCnt.get().then((x) => {
      x.forEach((value) => {
        data.push(value.val());
        data.sort(function (a, b) {
          return a.time - b.time;
        });
      });
    });
    return data;
  };
  const { data, isLoading, error, refetch } = useQuery(`makeRank`, makeRank);
  useEffect(() => {
    refetch();
  }, []);
  if (isLoading)
    return (
      <ReactLoading
        type={"spinningBubbles"}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: 50,
          height: 50,
        }}
      />
    );
  let ranking = 1;
  return data.map((data, index) => (
    <div className="rankSt fnt" key={index}>
      {ranking++}. {data.name} {data.time}
    </div>
  ));
}

export default Addrank;
