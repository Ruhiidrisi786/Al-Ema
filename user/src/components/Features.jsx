import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsGlobe } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import './Features.css';

const Features = () => {
  return (
    <div className="container-fluid py-5" style={{ background: "#f8f9fa", marginTop: "60px" }}>
      
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="fw-semi-bold">Why Choose Us</h1>
        <p className="fs-5 text-secondary">
          Industry-leading service and reliability
        </p>
      </div>

      {/* Cards Row */}
      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border">
              <div className="mb-3">
                <BsGlobe size={40} color="#0096b3" className="mb-3"/>
              </div>
              <h4 className="fw-bold">Global Supply Network</h4>
              <p className="text-secondary mt-2">
                Extensive distribution channels ensuring timely delivery to
                any location worldwide.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border">
              <div className="mb-3">
                <BsShieldCheck size={40} color="#0096b3" className="mb-3"/>
              </div>
              <h4 className="fw-bold">Quality Assurance</h4>
              <p className="text-secondary mt-2">
                Rigorous testing and certification for every barrel,
                meeting international standards.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border ">
              <div className="mb-3">
                <BsGraphDownArrow size={40} color="#0096b3" className="mb-3"/>
              </div>
              <h4 className="fw-bold">Competitive Pricing</h4>
              <p className="text-secondary mt-2">
                Market-leading rates with transparent pricing and 
                flexible payment terms.
              </p>
            </div>
          </div>

          {/*  card 4  */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border">
              <div className="mb-3">
                <BsHeadset size={40} color="#0096A3" className="mb-3" />
              </div>
              <h4 className="fw-bold">24/7 Support</h4>
              <p className="text-secondary mt-2">
                Round-the-clock customer service and technical support for all your needs.
              </p>
            </div>
          </div>

         
          {/* card 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border ">
              <div className="mb-3">
                <BsTruck size={40} color="#0096A3" className="mb-3" />
              </div>
              <h4 className="fw-bold">Reliable Delivery</h4>
              <p className="text-secondary mt-2">
                On-time delivery guaranteed with advanced logistics and tracking systems.
              </p>
            </div>
          </div>


          {/* card 6 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-center card-hover border ">
              <div className="mb-3">
                <BsAward size={40} color="#0096A3" className="mb-3" />
              </div>
              <h4 className="fw-bold">Industry Expertise</h4>
              <p className="text-secondary mt-2">
                Over 25 years of experience in the petroleum industry with proven track record.
              </p>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
};

export default Features;
