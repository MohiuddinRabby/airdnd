import React from "react";
import { useState } from "react";
import Result from "../Result/Result";
import "./Search.css";
import Banner from "../Banner/Banner";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { InfoContext } from "../../global/InfoContext";
const Search = () => {
  const { handleSubmit, register, errors } = useForm();
  const [travelInfo, setTravelInfo] = useContext(InfoContext);
  console.log('travel context',travelInfo);
  const [load, setLoad] = useState(true);
  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guest, setGuest] = useState(1);
  const handleForm = () => {
    const newInfo = [
      { location: location, chekin: checkin, checkout: checkout, guest: guest },
    ];
    setTravelInfo(newInfo);
    console.log(newInfo);
    setLocation("");
    setCheckout("");
    setCheckin("");
    setGuest(1);
    setLoad(false);
  };
  return (
    <div className="py-3">
      <div className="container">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="row">
            <div className="col-md-2">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Destination?"
                  className="form-control"
                  name="destination"
                  ref={register({
                    required: "Required",
                  })}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <p className="text-danger">
                {errors.destination && errors.destination.message}
              </p>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Check-in date</label>
                <input
                  type="date"
                  className="form-control"
                  name="checkin"
                  ref={register({
                    required: "Required",
                  })}
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </div>
              <p className="text-danger">
                {errors.checkin && errors.checkin.message}
              </p>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Check-out date</label>
                <input
                  type="date"
                  className="form-control"
                  name="checkout"
                  ref={register({
                    required: "Required",
                  })}
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                />
              </div>
              <p className="text-danger">
                {errors.checkout && errors.checkout.message}
              </p>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>No. of guest</label>
                <input
                  type="number"
                  className="form-control"
                  value={guest}
                  onChange={(e) => setGuest(guest + 1)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <div className="search-btn">
                  <button className="btn btn-danger">Search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className=" container py-5">
        {load ? <Banner></Banner> : <Result></Result>}
        {/* {load ? "" : <Result></Result>} */}
      </div>
    </div>
  );
};

export default Search;
