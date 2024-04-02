import React from "react";
import "./Group5.css";
import img6 from "../../assets/Images/img6.jpg";

const Group5 = () => {
  return (
    <div className="grp5-container">
      <div className="row">
        <div className="col-xl-6 ">
          <img src={img6} alt="grp4-img" className="w-75 m-img" />
        </div>
        <div className="col-xl-6 ">
          <div className="txt-containerGRP5 h-100">
            <p className="text1-grp5">NEW EXPERIENCE</p>
            <p className="text2-grp5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim
            </p>
            <button className="btn-grp5 mt-4">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group5;
