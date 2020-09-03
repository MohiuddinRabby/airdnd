import React from "react";
import { useState } from "react";
import "./Search.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Search = () => {
  const { handleSubmit, register, errors } = useForm();
  //   const [travelInfo, setTravelInfo] = useContext(InfoContext);
  //   console.log("travel context", travelInfo);
  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guest, setGuest] = useState(1);
  let results = useHistory();
  const handleForm = () => {
    const newInfo = [
      { location: location, chekin: checkin, checkout: checkout, guest: guest },
    ];
    // setTravelInfo(newInfo);
    console.log(newInfo);
    setLocation("");
    setCheckout("");
    setCheckin("");
    setGuest(1);
    results.push("/results");
  };
  return (
    <header id="banner">
      <div className="dark-overlay">
        <div className="container" id="form-container">
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
                <p>{errors.destination && errors.destination.message}</p>
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
                <p>{errors.checkin && errors.checkin.message}</p>
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
                <p>{errors.checkout && errors.checkout.message}</p>
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
      </div>
    </header>
  );
};

export default Search;
