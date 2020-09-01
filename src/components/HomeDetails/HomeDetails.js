import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../Cart/Cart";

const HomeDetails = () => {
  const { keys } = useParams();
  const [homeDetails, setHomeDetails] = useState({});
  useEffect(() => {
    fetch("https://airdnd0101.herokuapp.com/home/" + keys)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHomeDetails(data);
      });
  }, []);
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <img
                src={homeDetails.outImg}
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                src={homeDetails.inImg}
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </div>
          </div>
          <div className="py-5">
            <h3>{homeDetails.title}</h3>
            <h6>{homeDetails.description}</h6>
            <h4>Facility: {homeDetails.features}</h4>
          </div>
        </div>
        <div className="col-md-5">
          <h1>Cart info</h1>
          <h4>Price: ${homeDetails.price} / night</h4>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};
export default HomeDetails;
