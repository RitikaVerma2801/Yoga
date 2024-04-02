import React from "react";
import "./Group1.css";
import img1 from "../../assets/Images/img1.jpg";

const Group1 = () => {
  return (
    <div className="grp1-container">
      <div className="row">
        <div className="col-xl-6">
          <div className="design1 center">
            <img
              src={img1}
              alt="grp1-img"
              className="rounded-circle heightImg borderImg"
            />
          </div>
        </div>
        <div className="col-xl-6 px-5">
          <p className="f-size m-text center">YOGA CLASS</p>
          <p className="text fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,dolore magna aliqua. Ut enim ad minim veniama.
          </p>
          <div className="center mt-4">
            <button className="btn">JOIN NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group1;
