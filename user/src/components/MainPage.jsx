import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      {/* Heading */}
      <div className="text-center">
        <h1 className="fw-bold display-4 mb-3">Premium Crude Oil Supply</h1>

        <p
          className="fs-5 text-secondary mx-auto"
          style={{ maxWidth: "850px" }}
        >
          Leading supplier of high-quality crude oil to global markets. We
          ensure reliability, quality, and competitive pricing for all your
          petroleum needs.
        </p>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-center mt-4 flex-wrap">
        <button className="btn btn-info text-white btn-lg px-4 me-3 mb-2">
          <Link className="nav-link" to="/contact">
            Get Started →
          </Link>
        </button>

        <button className="btn btn-outline-dark btn-lg px-4 mb-2">
          <Link className="nav-link" to="/products">
            View Products
          </Link>
        </button>
      </div>

      {/* Stats Section */}
      <div className="row text-center mt-5 pt-4">
        <div className="col-6 col-md-3 mb-4">
          <h2 className="fw-bold text-info">25+</h2>
          <p className="text-secondary mb-0">Years of Experience</p>
        </div>

        <div className="col-6 col-md-3 mb-4">
          <h2 className="fw-bold text-info">50+</h2>
          <p className="text-secondary mb-0">Countries Served</p>
        </div>

        <div className="col-6 col-md-3 mb-4">
          <h2 className="fw-bold text-info">10M+</h2>
          <p className="text-secondary mb-0">Barrels Delivered</p>
        </div>

        <div className="col-6 col-md-3 mb-4">
          <h2 className="fw-bold text-info">500+</h2>
          <p className="text-secondary mb-0">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
