import React from "react";
import { Link } from "react-router-dom";

const ResultData = (props) => {
  const { title, outImg, price, keys } = props.data;
  console.log(props);
  return (
    <div className="card">
      <div className="card-body">
        <img src={outImg} className="card-img-top" alt="home" />
        <Link to={"/home-details/" + keys}>
          <h5 className="card-text">{title}</h5>
        </Link>
        <h5 className="card-text">${price} / night</h5>
      </div>
    </div>
  );
};

export default ResultData;
