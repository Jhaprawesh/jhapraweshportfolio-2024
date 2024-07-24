import React from "react";
import contImage from "../assets/image/bg.jpg";

const ContactUs = () => {
  return (
    <div className="container" id="contactus">
      <h2 className="text-capitalize text-center mt-2">Get in touch</h2>
      <div className="row position-relative mt-5" data-aos="zoom-in">
        <div className="col-md-6">
          <div className="image">
            <img
              src={contImage}
              className="carou img-thumbnail"
              alt="Contact background"
            />
          </div>
          <div className="text_info g-3">
            <div className="location col-md-4 col-sm-4 p-3">
              <i className="fa-solid fa-location-dot text-success">Location</i>
              <span className="text-light"> India, Bihar</span>
            </div>
            <div className="phone col-md-4 col-sm-4 p-3">
              <i className="fa-sharp fa-solid fa-phone text-success">
                Let's Talk
              </i>
              <span className="text-light">7981379168</span>
            </div>
            <div className="email col-md-4 col-sm-4 p-3">
              <i className="fa-solid fa-envelope text-success">
                General Support
              </i>
              <span className="text-light">erprawesh@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form action="https://formspree.io/f/mwkzolwj" method="POST">
            <div>
              <p className="text-center">Send Us A Message</p>
            </div>
            <div className="row g-3">
              <span>Name</span>
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="+91 79XXXXXXXX"
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary text-center w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
