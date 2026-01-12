import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send: " + error.text);
          setIsSending(false);
        }
      );
  };
  return (
    <div
      id="contact"
      className=" text-white"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <div className="text-center bg-white rounded-pill">
          <span className="text-dark display-4">CONTACT</span>
        </div>
      </div>
      <div className="container bg-black text-white d-flex align-items-center justify-content-center ">
        <div
          className="d-flex flex-column w-100 "
          style={{ maxWidth: "500px" }}
        >
          <form ref={formRef} onSubmit={sendEmail} className="w-100">
            <div className="mb-3 d-flex flex-column gap-2 m-4">
              <input
                type="text"
                name="user_name"
                className="form-control bg-dark border-secondary text-white custom-input p-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="m-4">
              <input
                type="email"
                name="user_email"
                className="form-control bg-dark border-secondary text-white p-2 custom-input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="m-4">
              <textarea
                name="message"
                className="form-control bg-dark border-secondary text-white p-2 custom-input"
                rows="4"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="btn btn-outline-primary  py-2 fw-bold m-4"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <footer className="border-top border-secondary py-4 mt-auto">
        <div className="container d-flex  justify-content-between align-items-center text-white small">
          <p className="mb-2 ">Designed and Developed by Vikash Kumar</p>

          <p className="mb-2 ">Copyright © 2026 Vikash Kumar</p>

          <div className="d-flex gap-3">
            <a href="#" className="text-secondary">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
