import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import planeImg from "../../img/planeOne.gif";
import ResultData from "../ResultData/ResultData";
const Result = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://airdnd0101.herokuapp.com/homes")
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        // console.log(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <img
            src={planeImg}
            style={{ width: "300px", height: "300px" }}
            alt=""
          />
        </div>
      ) : (
        <div className="row">
          {result.map((info) => (
            <div className="col-md-4 py-2" key={info.keys}>
              <ResultData data={info}></ResultData>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
