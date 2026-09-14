import "./Footer.css";

function Footer () {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

         
          <div className="footer-logo"><img src="/images/logo-text.png" alt="" /></div>

         

          <p>
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

        <div className="footer-column">

          <h3>PRODUCT</h3>

          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>

        </div>

        <div className="footer-column">

          <h3>COMPANY</h3>

          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>

        </div>

        <div className="footer-column">

          <h3>LEGAL</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;