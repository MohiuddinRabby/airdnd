import React from "react";
import { useParams } from "react-router-dom";

const HomeDetails = () => {
  const { keys } = useParams();
  return (
    <div className="container py-3">
      <h1>THis is home details {keys}</h1>
    </div>
  );
};
export default HomeDetails;
