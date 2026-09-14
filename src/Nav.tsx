import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-box">DS</span>
        <h1>Dev <span>Stack</span></h1>
      </div>

      <div className="nav-links">
        <a className="active" href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;