import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  let params = useParams();
  console.log("Detail");

  return (
    <>
      <p>Detail: {params.detailId}</p>
    </>
  );
}

export default Detail;