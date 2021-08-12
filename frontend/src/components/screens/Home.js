import React from "react";
import Header from "../screencomponents/homecomponent/header";
import IntroHero from "../screencomponents/homecomponent/Introhero";
import AboutUs from "../screencomponents/homecomponent/Aboutus";
import Services from "../screencomponents/homecomponent/Service";
import Reason from "../screencomponents/homecomponent/Reason";
import Portfolio from "../screencomponents/homecomponent/Portfolio";
import Testimonial from "../screencomponents/homecomponent/Testimonial";
import Team from "../screencomponents/homecomponent/Team";
import Clients from "../screencomponents/homecomponent/Client";
import Contactus from "../screencomponents/homecomponent/Contact";
import Footer from "../screencomponents/homecomponent/footer";

function Home() {
  return (
    <>
    <Header/>,
    <IntroHero/>,
    <AboutUs/>,
    <Services/>,
    <Reason/>,
    <Portfolio/>,
    <Testimonial/>,
    <Team/>,
    <Clients/>,
    <Contactus/>,
    <Footer/>
   
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
