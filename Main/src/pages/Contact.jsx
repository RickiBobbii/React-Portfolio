import React from "react";
import ContactInfo from "../components/ContactInfo";
import CozyCat from "../assets/CatAI-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Contact() {
  return (
    <section className="vh-100" style={{backgroundImage: `url(${CozyCat})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    backgroundAttachment:"fixed"}}> 
      <div className="row justify-content-center">
        <h1 className="text-center text-warning pt-3 col col-md-5" style={{backdropFilter: "blur(10px)"}}><u>Contact Me</u></h1>
      </div>

      <div className="container" >
        <div className="row justify-content-center">
          <h1 className="text-center mb-4"></h1>
          {/* 
          <img
            className="rounded  col col-md-5 m-3"
            src={CozyCat}
            alt="CozyCat"
          /> */}
          <div className="col col-md-5 m-3" style={{backdropFilter: "blur(10px)"}}>
            <form className="justify-content-center">
              {/* Name */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="contact-name"
                  className="form-control"
                  placeholder="Name"
                />
                <label className="form-label"></label>
              </div>
              {/* Email */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="contact-email"
                  className="form-control"
                  placeholder="Email"
                />
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
              <button type="button" className="btn btn-warning btn-block mb-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
