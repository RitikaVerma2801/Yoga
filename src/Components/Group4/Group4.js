import React from "react";
import "./Group4.css";
import img5 from "../../assets/Images/img5.jpg";

const Group4 = () => {
  return (
    <div className="row">
      <div className="col-xl-6 pe-0">
        <div className="txt-container h-100">
          <p className="text1-grp4">BEST INSTRUCTOR</p>
          <p className="text2-grp4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            adminim
          </p>
          <button className="btn-grp4 mt-4">READ MORE</button>
        </div>
      </div>
      <div className="col-xl-6 ps-0">
        <img src={img5} alt="grp4-img" className="w-100" />
      </div>
    </div>
  );
};

export default Group4;
