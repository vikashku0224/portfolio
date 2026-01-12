import {
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaAddressBook,
} from "react-icons/fa";

function Navbar() {
  return (
    <div
      className="container rounded-pill sticky-top  "
      style={{ backgroundColor: "white", color: "black" }}
    >
      <nav
        className="navbar sticky-top  rounded-pill "
        style={{ marginTop: "30px" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left */}
          <a className="navbar-brand text-black" href="#">
            Vikash Kumar
          </a>

          {/* Right */}
          <div className="d-flex gap-3">
            <a href="#about" className="btn btn-light text-black">
              <FaUser className="me-2" /> About
            </a>

            <a href="#projects" className="btn btn-light text-black">
              <FaProjectDiagram className="me-2" /> Projects
            </a>

            <a href="#resume" className="btn btn-light text-black">
              <FaFileAlt className="me-2" /> Resume
            </a>

            <a href="#contact" className="btn btn-light text-black">
              <FaAddressBook className="me-2" /> Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
