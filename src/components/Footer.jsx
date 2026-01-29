export default function Footer() {
  return (
    <footer className="veloura-footer text-white py-5">
      <div className="container">

        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <p className="small mb-1">
              <strong>Email:</strong> support@veloura.com
            </p>
            <p className="small">
              <strong>Phone:</strong> +91 98765 43210
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="/AboutUs.html">About Us</a></li>
              <li><a href="/Terms&Conditions.html">Terms & Conditions</a></li>
              <li><a href="/PrivayPolicy.html">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icon">
              <a href="#" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h5>Stay in Touch</h5>
            <p>Sign up for exclusive updates and new arrivals.</p>

            <form
              className="d-flex justify-content-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                className="form-control w-50"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-primary ms-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center small mt-3">
          © 2026 VELOURA — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
