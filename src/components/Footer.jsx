import React from "react";
import AffixDemo from "./AffixDemo";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <div className="container-fluid">
      <AffixDemo />
      <footer className="bg-light text-center text-white">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
            <SocialMediaLinks />
          </section>
        </div>

        <div className="text-center p-3 bg-black">
          © 2022 Copyright:
          <a className="text-white" href="https://praweshjha.netlify.app/">
            praweshjha.netlify.app
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
