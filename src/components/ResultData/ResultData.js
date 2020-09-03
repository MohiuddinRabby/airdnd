import React from "react";
import { Link } from "react-router-dom";
const ResultData = (props) => {
  const { title, price, keys, outImg } = props.results;
  return (
    <div className="card">
      <div className="card-body">
        <img
          src={outImg}
          style={{ width: "100%", height: "200px" }}
          className="img-top py-2"
          alt=""
        />
        <Link to={"/house-details/" + keys}>
          <h6>{title}</h6>
        </Link>
        <h5>${price} /night</h5>
      </div>
    </div>
  );
};

export default ResultData;
