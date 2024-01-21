import React from "react";
import ContactInfo from "../components/ContactInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Contact() {
  return (
    
    <section>
      <div className="flex-row">
        <h2 className="text-center mt-4">Hey There</h2>
      </div>

    <div className="container mt-5">
      <div className="row justify-content-center">
      <h1 className="text-center mb-4">Contact Me</h1>
        <div className="col col-md-6">
          <form className="justify-content-center" style={{ }}>
            {/* Name */}
            <div className="form-outline mb-4">
              <input type="text" id="contact-name" className="form-control" placeholder="Name"/>
              <label className="form-label"></label>
            </div>
            {/* Email */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="contact-email" className="form-control" placeholder="Email" />
              <label className="form-label"></label>
            </div>
            {/* Message */}
            <div data-mdb-input-init className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
                placeholder="Message"
              ></textarea>
              <label className="form-label"></label>
            </div>
            {/* Send Button */}
            <button type="button" className="btn btn-primary btn-block mb-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
