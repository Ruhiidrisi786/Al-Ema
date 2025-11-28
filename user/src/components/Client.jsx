import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Client = () => {
  return (
    <div className="container-fluid py-5" style={{ marginTop: "60px" }}>
      
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="fw-semi-bold">Client Testimonials</h1>
        <p className="fs-5 text-secondary">
          What our partners say about us
        </p>
      </div>

      {/* Cards Row */}
      <div className="container">
        <div className="row g-4 justify-content-center">

          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-left card-hover border">
              
              <h4 className="fw-bold mt-2">*****</h4>
              <p className="text-secondary mt-2">
                "AL-EMA Industries has been our trusted crude oil supplier for over 5 years. Their consistency and quality are unmatched."
              </p>
              <p className="fw-bold mb-1">John Mitchell</p>
              <p>Global Refining Corp</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-left card-hover border">
              
              <h4 className="fw-bold mt-2">*****</h4>
              <p className="text-secondary mt-2">
                "Exceptional service and competitive pricing. They've helped us optimize our supply chain significantly."
              </p>
              <p className="fw-bold mb-1">Sarah Chen</p>
              <p>Pacific Energy Solutions</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 bg-white shadow-sm rounded-3 h-100 text-left card-hover border ">
              
              <h4 className="fw-bold mt-2">*****</h4>
              <p className="text-secondary mt-2">
                "Professional team, reliable delivery, and excellent quality control. Highly recommended for any petroleum needs." transparent pricing and 
                flexible payment terms.
              </p>
              <p className="fw-bold mb-1">Ahmed Al-Rashid</p>
              <p>Middle East Petrochemicals</p>
            </div>
          </div>


        </div>
      </div>

      
    </div>
  );
};

export default Client;
