import React from "react";
import { useState } from "react";
import Result from "../Result/Result";
import "./Search.css";
import Banner from "../Banner/Banner";
const Search = () => {
  const [load, setLoad] = useState(true);
  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(false);
  };
  return (
    <div className="py-3">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Where you are going?"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Check-in date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Check-out date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-3">
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
      </div>
    </div>
  );
};

export default Search;
