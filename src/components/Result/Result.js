import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import planeImg from "../../img/planeOne.gif";
const Result = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.icndb.com/jokes")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.value.slice(10, 15));
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
        result.map((post) => <li>{post.joke}</li>)
      )}
    </div>
  );
};

export default Result;
