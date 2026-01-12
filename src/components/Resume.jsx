import cvImage from "../assets/image/vcv.JPG";
import resume from "../assets/vikash_kumar.pdf";

function Resume() {
  return (
    <div
      id="resume"
      className=" text-white mb-4"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container mb-4">
        <div className="text-center bg-white rounded-pill">
          <span className="text-dark display-4">RESUME</span>
        </div>
      </div>
      <div className="m-2 p-2">
        <a
          href={resume}
          download="filename_to_save.pdf"
          className="btn btn-light rounded-pill m-3 p-3 shadow-sm"
        >
          <i className="bi bi-download me-2"></i>
          Download CV
        </a>
      </div>
      <div className="cv">
        <img src={cvImage} alt="" />
      </div>
    </div>
  );
}

export default Resume;
