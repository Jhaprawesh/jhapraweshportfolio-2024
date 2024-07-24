import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Portfolio from "./Portfolio";
// import BlogList from "./BlogList";
import ContactUs from "./ContactUs";
import NewBlog from "./NewBlog";
// import NewSingle from "./NewSingle";

const HomePageLayout = () => (
  <>
    <Header />
    <AboutMe />
    <Services />
    <Portfolio />
    {/* <BlogList /> */}
    <NewBlog />
    {/* <NewSingle /> */}
    <ContactUs />
  </>
);

export default HomePageLayout;
