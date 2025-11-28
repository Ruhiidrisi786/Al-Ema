import "./Products.css"; // <-- Add this CSS file

const Products = () => {
  return (
    <div className="container py-5">

      {/* TITLE */}
      <div className="text-center mt-5 mb-5">
        <h1 className="fw-semi-bold">Our Products</h1>
        <p className="text-muted fs-5">
          Premium crude oil varieties for every industrial need
        </p>
      </div>

      {/* CARDS */}
      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-card p-4 border rounded h-100">
            <h4 className="text-primary fw-bold">Light Sweet Crude</h4>
            <p className="text-muted mt-3">
              Premium quality light crude oil with low sulfur content, ideal for
              refining into gasoline and diesel.
            </p>

            <p><strong>API Gravity:</strong> 38–45° API</p>
            <p><strong>Sulfur Content:</strong> &lt;0.5%</p>

            <h6 className="fw-bold mt-4">Key Features:</h6>
            <ul className="text-muted">
              <li>High yield</li>
              <li>Low sulfur</li>
              <li>Easy refining</li>
            </ul>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-card p-4 border rounded h-100">
            <h4 className="text-primary fw-bold">Heavy Crude Oil</h4>
            <p className="text-muted mt-3">
              Dense, viscous crude oil perfect for industrial applications and
              specialized refining processes.
            </p>

            <p><strong>API Gravity:</strong> 10–22° API</p>
            <p><strong>Sulfur Content:</strong> 2–3%</p>

            <h6 className="fw-bold mt-4">Key Features:</h6>
            <ul className="text-muted">
              <li>Cost-effective</li>
              <li>High volume</li>
              <li>Industrial grade</li>
            </ul>
          </div>
        </div>

        {/* CARD 3 — Highlighted */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-card p-4 border rounded h-100">
            <h4 className="text-primary fw-bold">Medium Crude Oil</h4>
            <p className="text-muted mt-3">
              Balanced crude oil with optimal properties for various refining
              processes and applications.
            </p>

            <p><strong>API Gravity:</strong> 22–38° API</p>
            <p><strong>Sulfur Content:</strong> 0.5–2%</p>

            <h6 className="fw-bold mt-4">Key Features:</h6>
            <ul className="text-muted">
              <li>Versatile</li>
              <li>Reliable quality</li>
              <li>Global standard</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-card p-4 border rounded h-100">
            <h4 className="text-primary fw-bold">Sour Crude Oil</h4>
            <p className="text-muted mt-3">
              BHigh sulfur content crude oil for specialized industrial applications and energy production.
            </p>

            <p><strong>API Gravity:</strong> 20–35° API</p>
            <p><strong>Sulfur Content:</strong> &gt;2%</p>

            <h6 className="fw-bold mt-4">Key Features:</h6>
            <ul className="text-muted">
              <li>Competitive pricing</li>
              <li>Bulk availability</li>
              <li>Industrial use</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
