import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// Social media links
const socialMediaLinks = [
  {
    href: "https://www.instagram.com/jha_prawesh/",
    icon: <FaInstagram />,
    style: { backgroundColor: "#ac2bac" },
    ariaLabel: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/prawesh-jha-54ab98215/",
    icon: <FaLinkedin />,
    style: { backgroundColor: "#0082ca" },
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://github.com/Jhaprawesh",
    icon: <FaGithub />,
    style: { backgroundColor: "#333333" },
    ariaLabel: "GitHub",
  },
];

const SocialMediaLinks = () => (
  <section className="d">
    {socialMediaLinks.map(({ href, icon, style, ariaLabel }) => (
      <a
        key={href}
        className="btn text-white btn-floating m-1"
        style={style}
        href={href}
        role="button"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    ))}
  </section>
);

export default SocialMediaLinks;
