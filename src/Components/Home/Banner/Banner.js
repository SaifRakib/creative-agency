import React from "react";
import bannerImage from "../../../images/logos/Frame.png";

const Banner = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="banner d-flex">
            <div className="col-md-6">
              <div className="banner-text">
                <h1 className="p-4 pt-5">
                  Let's Grow your brand to the next level
                </h1>
                <p className="px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  esse aliquam aliquid vero. Quia eius excepturi minima nam
                  numquam corporis.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-image">
                <img src={bannerImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
