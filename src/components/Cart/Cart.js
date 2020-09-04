import React from "react";
import { useContext } from "react";
import { InfoContext } from "../../global/InfoContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../global/useAuth";

const Cart = () => {
  const [info, setInfo] = useContext(InfoContext);
  //   console.log("from cart", info);
  const auth = useAuth();
  return (
    <div className="card">
      <div className="card-body">
        {info.map((infos) => (
          <div>
            <h4>Destination: {infos.location}</h4>
            <h5>Check-in-date: {infos.chekin}</h5>
            <h5>Check-out-date: {infos.checkout}</h5>
            <h5>Guest: {infos.guest}</h5>
            {auth.singInUser ? (
              <Link to="/confirm-order" className="btn btn-danger btn-sm">
                Confirm Reservation
              </Link>
            ) : (
              <Link to="/login" className="btn btn-danger btn-sm">
                Signin to confirm reservation
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
