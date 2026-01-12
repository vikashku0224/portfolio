import {
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaAddressBook,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center "
      style={{ height: "100vh", backgroundColor: "black", color: "white" }}
    >
      <div className="row w-100 animate__animated animate__fadeInUp animate__delay-.5s">
        {/* LEFT */}
        <div className="col-md-5 ps-5">
          <h4>
            Hi There !! <span>👋</span>
          </h4>

          <h1 className="fw-bold mt-3">I'M VIKASH KUMAR</h1>

          <h1
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              fontWeight: "normal",
            }}
          >
            A{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Devloper",
                  "Frontend Developer",
                  "Open Source Contributor",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => console.log(`Done after 5 loops!`)}
              />
            </span>
          </h1>
        </div>

        {/* CENTER */}
        <div className="col-md-2 d-flex justify-content-center align-items-center fs-1">
          <span className="text-info">&lt;</span>
          <span className="text-secondary mx-2">/</span>
          <span className="text-info">&gt;</span>
        </div>

        {/* RIGHT */}
        <div className="col-md-5 d-flex flex-column align-items-center pe-5 gap-4 animate__animated animate__fadeInUp animate__delay-1s">
          <a href="#about" className="btn btn-light rounded-pill px-5 py-3">
            <FaUser className="me-2" /> About
          </a>

          <a href="#projects" className="btn btn-light rounded-pill px-5 py-3">
            <FaProjectDiagram className="me-2" /> Projects
          </a>

          <a href="#resume" className="btn btn-light rounded-pill px-5 py-3">
            <FaFileAlt className="me-2" /> Resume
          </a>

          <a href="#contact" className="btn btn-light rounded-pill px-5 py-3">
            <FaAddressBook className="me-2" /> Contact
          </a>
        </div>
      </div>
    </div>
  );
}
