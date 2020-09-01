import React from "react";
import { useContext } from "react";
import { InfoContext } from "../../global/InfoContext";
import { useState } from "react";

const Cart = () => {
  const [travelInfo, setTravelInfo] = useContext(InfoContext);
  const [reserve, setReserve] = useState(false);
  const handleReserve = () => {
    setReserve(true);
  };
  return (
    <div>
      {travelInfo.map((info) => (
        <div>
          <h5>Location: {info.location}</h5>
          <h5>
            CheckIn: {info.chekin} | CheckOut: {info.checkout}
          </h5>
          {reserve ? (
            <p className="text-success">Room reserved</p>
          ) : (
            <button className="btn btn-danger" onClick={handleReserve}>
              Reserve
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
export default Cart;
