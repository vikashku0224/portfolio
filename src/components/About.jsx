import image from "../assets/image/web.jpg";
import javascript from "../assets/image/javascript.JPG";
import react from "../assets/image/react.JPG";
import node from "../assets/image/nodejs.JPG";
import mongodb from "../assets/image/mongodb.JPG";
import css from "../assets/image/css.JPG";
import postman from "../assets/image/postman.JPG";
import vsc from "../assets/image/vsc.JPG";
import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  let skillImages = [css, javascript, react, node, mongodb];
  let tools = [postman, vsc];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      id="about"
      style={{ color: "white" }}
      className="mt-4 mb-4"
      data-aos="fade-up"
    >
      <div className="container pt-5 animate__animated animate__fadeInUp animate__delay-2s">
        <div className="text-center bg-white rounded-pill ">
          <span className="text-dark display-4">ABOUT ME</span>
        </div>
        <div className="container mt-5"></div>
        <div className="row">
          <div className="col-6">
            <h1 style={{ fontSize: "2.1rem" }}>
              LET ME <span className="text-primary">INTRODUCE</span> MYSELF
            </h1>
            <br />
            <br />
            <br />
            <br />
            <p>
              Hey,I'm a 👋
              <b className="text-primary">Frontend Web developer </b>
              worked at RD Engg Pvt Ltd. Over the past 2.5 years, I’ve focused
              on bridging the gap between design and functionality. I’m
              passionate about clean code, responsive layouts, and creating
              intuitive interfaces that work beautifully on any device."
            </p>
          </div>
          <div className="col-6">
            <img
              src={image}
              className="img-fluid rounded shadow-sm"
              alt="Web Development "
            />
          </div>
        </div>
        <div className="container mt-5">
          <h1>
            Professional <span className="text-primary">Skillset</span>
          </h1>
          <div className="d-flex flex-row flex-wrap justify-content-center gap-2 mt-5 mb-5 data-aos=fade-left">
            {skillImages.map((image, index) => (
              <div
                className="card skill-card"
                key={index}
                style={{ borderRadius: "5px" }}
              >
                <img
                  src={image}
                  className="card-img-top"
                  alt={image.alt}
                  style={{ weidth: "100px", height: "100px" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>
            <span className="text-primary">Tools</span> I use
          </h1>
          <div className="d-flex flex-row flex-wrap justify-content-center gap-2 mt-5 mb-5 animate__animated animate__fadeInLeft">
            {tools.map((tool, index) => (
              <div className="card skill-card" key={index}>
                <img
                  src={tool}
                  className="card-img-top"
                  alt={image.alt}
                  style={{ weidth: "100px", height: "100px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1>FIND ON ME</h1>
        <p>
          Feel free to <span className="text-primary">connect</span> with me
        </p>
        <ul className="list-inline social-links">
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com/vikassingh_1/?utm_source=qr&igsh=ZmF4M2Vla2JhejJq#"
              target="_blank"
              rel="noreferrer"
              className="text-white "
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/vikash-kumar-7854a8284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="text-white "
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-white "
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
