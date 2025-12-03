import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light py-2 px-5 shadow-sm">
      {/* <div className="container"> */}
      <a className="navbar-brand fs-3 fw-semi-bold" to="/">
        AL-EMA INDUSTRIES
      </a>

      {/* hamburger toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* collapsible menu */}
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>

    // <Routes>
    //   <Route path="/about" element={<About />} />
    //   <Route path="/products" element={<Products />} />
    //   <Route path="/features" element={<Features />} />
    //   <Route path="/contact" element={<Contact />} />
    // </Routes>
  );
};

export default Navbar;
