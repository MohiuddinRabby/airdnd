import React from "react";
import { useContext } from "react";
import { InfoContext } from "../../global/InfoContext";

const Cart = () => {
  const [info, setInfo] = useContext(InfoContext);
//   console.log("from cart", info);
  return (
    <div className="card">
      <div className="card-body">
        {info.map((infos) => (
          <div>
            <h4>Destination: {infos.location}</h4>
            <h5>Check-in-date: {infos.chekin}</h5>
            <h5>Check-out-date: {infos.checkout}</h5>
            <h5>Guest: {infos.guest}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
