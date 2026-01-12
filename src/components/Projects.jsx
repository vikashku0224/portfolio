function Projects() {
  return (
    <div
      id="projects"
      style={{ backgroundColor: "black", color: "white" }}
      className="mt-4 mb-4"
    >
      <div className="container">
        <div className="text-center bg-white rounded-pill mb-4">
          <span className="text-dark display-4">PROJECTS</span>
        </div>
      </div>
      <div>
        <h1>
          Here are a few <span className="text-primary">projects </span>i've
          worked on recentely
        </h1>
        <div className="card " style={{ width: "18rem", marginLeft: "50px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">UpLoaded Soon...</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn bg-black text-white">
              <i className="bi bi-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
