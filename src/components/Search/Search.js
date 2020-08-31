import React from "react";
import { useState } from "react";
import Result from "../Result/Result";

const Search = () => {
  const [load, setLoad] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(false);
  };
  return (
    <div className="py-5">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <input type="text" placeholder="place" />
            </div>
            <div className="col-md-4">
              <label>chekin</label>
              <input type="date" />
            </div>
            <div className="col-md-4">
              <label>checkout</label>
              <input type="date" />
            </div>
            <button>Search</button>
          </div>
        </div>
      </form>
      <div className="py-5">
        {load ? "data to be loaded" : <Result></Result>}
      </div>
    </div>
  );
};

export default Search;
