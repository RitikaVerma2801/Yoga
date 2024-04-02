import React from "react";
import "./Group2.css";
import img2 from "../../assets/Images/img2.jpg";
import img3 from "../../assets/Images/img3.jpg";
import img4 from "../../assets/Images/img4.jpg";

const Group2 = () => {
  return (
    <div className="grp2-container">
      <div>
        <p className="f-size1 center">CHOOSE CLASS</p>
        <p className="text1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,dolore magna aliqua. Ut enim ad minim veniama.
        </p>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="design2">
            <img
              src={img2}
              alt="grp2-img"
              className="center rounded-circle imgheight mx-auto"
            />
          </div>

          <p className="f-size2 center me-5">NEWBIE CLASS</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="col-xl-4">
          <div className="design2">
            <img
              src={img3}
              alt="grp2-img"
              className="center rounded-circle imgheight mx-auto"
            />
          </div>

          <p className="f-size2 center me-5">ADVANCED CLASS</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="col-xl-4">
          <div className="design2">
            <img
              src={img4}
              alt="grp2-img"
              className="center rounded-circle imgheight mx-auto"
            />
          </div>

          <p className="f-size2 center me-5">EXPERT CLASS</p>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Group2;
