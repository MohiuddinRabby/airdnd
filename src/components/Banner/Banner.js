import React from "react";
import bannerImg from "../../img/14.svg";
import bannerImgTwo from "../../img/15.svg";
const Banner = () => {
  return (
    <div className="text-center">
      <img
        src={bannerImgTwo}
        style={{ width: "100%", height: "300px" }}
        alt=""
      />
    </div>
  );
};

export default Banner;
