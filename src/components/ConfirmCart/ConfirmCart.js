import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const ConfirmCart = () => {
  let history = useHistory();
  const [errors, setError] = useState(null);
  const [payments, setPayments] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleHistory = () => {
    history.push("/");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error.message);
    } else {
      setPayments(paymentMethod);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Mobile</label>
              <input type="number" class="form-control" required />
            </div>
            <label>Card Info</label>
            <CardElement />
            <br />
            <p>
              fake card number (4242 4242 4242 4242)-MM/YY (valid
              date)-CVC(123)-ZIP(60201)
            </p>
            <br />
            <button type="submit" className="btn btn-danger" disabled={!stripe}>
              Confirm
            </button>
          </form>
          {errors && (
            <h5 className="text-danger">
              <strong>{errors}</strong>
            </h5>
          )}
          {payments && (
            <div>
              <h5 className="text-success">
                <strong>payment success</strong>
              </h5>
              <button onClick={handleHistory} className="btn btn-info">
                go homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmCart;
