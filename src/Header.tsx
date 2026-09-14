import "./header.css";

function Header() {
  return (
    <header className="hero-header">
      <div className="hero-container">

        
        <div className="hero-content">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Technologies
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>
        </div>

    
        <div className="hero-visual">
          <img
            src="images/banner-stack.png"
            alt="Development Stack"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;