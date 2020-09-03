import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import loader from "../../img/planeOne.gif";
import Axios from "axios";
import ResultData from "../ResultData/ResultData";
const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://airdnd0101.herokuapp.com/homes")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //     setLoading(false);
    //   });
    const fetchItem = async () => {
      const res = await Axios("https://airdnd0101.herokuapp.com/homes");
      setData(res.data);
      setLoading(false);
    };
    fetchItem();
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="text-center">
          <img
            src={loader}
            style={{ width: "300px", height: "300px" }}
            alt=""
          />
        </div>
      ) : (
        <div className="row py-5">
          {data.map((info) => (
            <div className="col-md-4 py-2" key={info.keys}>
              <ResultData results={info}></ResultData>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
