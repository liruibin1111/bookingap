import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="log">
          <h1>ruibin-design</h1>
        </span>
        <div className="nabItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
