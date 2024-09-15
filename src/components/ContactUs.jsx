import React from "react";
import contImage from "../assets/image/bg.jpg";
import Title from "./Title";

const ContactUs = () => {
  return (
    <>
      <div className="container" id="contactus">
        <Title
          title="Contact-Us"
          subTitle="Or Reach Us At"
          titleClassName={"tw-text-blue-950"}
          subtitleClassName={"tw-text-950"}
        />
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
                <i className="fa-solid fa-location-dot text-success">
                  Location
                </i>
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
              <div className="row g-3 mb-4">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      required
                    />
                  </label>
                </div>
                <div className="col">
                  <label htmlFor="lastname" className="form-label">
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label w-100">
                  Email address
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="name@example.com"
                    required
                  />
                </label>
              </div>

              <div className="mb-3 ">
                <label htmlFor="phone" className="form-label w-100">
                  Phone Number
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="+91 79XXXXXXXX"
                    required
                  />
                </label>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label w-100">
                  Message
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="3"
                    placeholder="Your message here..."
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary text-center w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
