import React from "react";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Services from "./Services";
import ContactUs from "./ContactUs";
import NewBlog from "./NewBlog";

const HomePageLayout = () => (
  <>
    <Header />
    <AboutMe />
    <Services />
    <Portfolio />
    <NewBlog />
    <ContactUs />
  </>
);

export default HomePageLayout;
