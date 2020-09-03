import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Cart from "../Cart/Cart";
const ResultDataDetails = () => {
  const { keys } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let goResults = useHistory();
  const handleGoResult = () => {
    goResults.push("/results");
  };
  useEffect(() => {
    const fetchItem = async () => {
      const res = await Axios(`https://airdnd0101.herokuapp.com/home/${keys}`);
      setDetails(res.data);
      setLoading(false);
    };
    fetchItem();
  }, []);
  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={handleGoResult}
      >
        See other houses
      </button>
      <div className="row py-5">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <img
                src={details.outImg}
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                src={details.inImg}
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </div>
          </div>
          <div className="py-3">
            <h5>{details.title}</h5>
            <h6>Facilities: {details.description}</h6>
            <h6>Price: ${details.price} /night</h6>
          </div>
        </div>
        <div className="col-md-5">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default ResultDataDetails;
