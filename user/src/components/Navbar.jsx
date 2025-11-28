import { BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom"
import Products from "./Products"
import About from "./About"
import Features from "./Features"
import Contact from "./Contact"


const Navbar = () => {
  return (
    
     <BrowserRouter>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light py-2 shadow-sm">
        <div className="container">
          <a className="navbar-brand fs-3 fw-semi-bold" href="#" as={Link} to="/">AL-EMA INDUSTRIES</a>

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
            <span className="navbar-toggler-icon"/>
          </button>

          {/* collapsible menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink className="nav-link" as={Link} to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" as={Link} to="/products">Products</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link"  to="/features">Features</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" as={Link} to="/contact">Contact</NavLink>
              </li>

              {/* <li className="nav-item ms-lg-3">
                <Link className="btn btn-primary btn-sm" href="/contact-form" as={Link} to="/contact-form">Get Starts</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
     
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    
  );
};

export default Navbar;
