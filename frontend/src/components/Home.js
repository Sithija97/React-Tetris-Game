import React from "react";

function Home() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero" className="clearfix">
        <div className="container" data-aos="fade-up">
          <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <h2>
              We provide
              <br />
              <span>solutions</span>
              <br />
              for your business!
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#services" className="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>

                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>

              <div
                className="col-lg-6 background order-lg-2"
                data-aos="zoom-in"
              >
                <img
                  src="assets/img/about-img.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src="assets/img/about-extra-1.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                <h4>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h4>
                <p>
                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                  possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                  Deleniti quod porro sed quisquam saepe. Numquam mollitia
                  recusandae non ad at et a.
                </p>
                <p>
                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                  Odit qui asperiores ea corporis deserunt veritatis quidem
                  expedita perferendis. Qui rerum eligendi ex doloribus quia
                  sit. Porro rerum eum eum.
                </p>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                <img
                  src="assets/img/about-extra-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-right"
              >
                <h4>
                  Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                  tempora facere reprehenderit.
                </h4>
                <p>
                  Delectus alias ut incidunt delectus nam placeat in
                  consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui
                  aut distinctio. Cumque fugit earum est quam officiis numquam.
                  Ducimus corporis autem at blanditiis beatae incidunt sunt.
                </p>
                <p>
                  Voluptas saepe natus quidem blanditiis. Non sunt impedit
                  voluptas mollitia beatae. Qui esse molestias. Laudantium
                  libero nisi vitae debitis. Dolorem cupiditate est perferendis
                  iusto.
                </p>
                <p>
                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                  sint quia modi. Numquam est aut fuga mollitia exercitationem
                  nam accusantium provident quia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Services</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row justify-content-center">
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-briefcase"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-card-checklist"
                      style={{ color: "#e9bf06" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-bar-chart"
                      style={{ color: "#3fcdc7;" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-binoculars"
                      style={{ color: "#41cf2e" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-brightness-high"
                      style={{ color: "#d6ff22" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="box">
                  <div className="icon">
                    <i
                      className="bi bi-calendar4-week"
                      style={{ color: "#4680ff" }}
                    ></i>
                  </div>
                  <h4 className="title">
                    <a href="">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <i className="bi bi-calendar4-week"></i>
                  <div className="card-body">
                    <h5 className="card-title">Corporis dolorem</h5>
                    <p className="card-text">
                      Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                      temporibus sunt ab inventore officiis aut voluptatibus.
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="200">
                  <i className="bi bi-camera-reels"></i>
                  <div className="card-body">
                    <h5 className="card-title">Voluptates dolores</h5>
                    <p className="card-text">
                      Voluptates nihil et quis omnis et eaque omnis sint aut.
                      Ducimus dolorum aspernatur.
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="300">
                  <i className="bi bi-chat-square-text"></i>
                  <div className="card-body">
                    <h5 className="card-title">Eum ut aspernatur</h5>
                    <p className="card-text">
                      Autem quod nesciunt eos ea aut amet laboriosam ab. Eos
                      quis porro in non nemo ex.{" "}
                    </p>
                    <a href="#" className="readmore">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row counters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="421"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1364"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="42"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="clearfix">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/app1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">App 1</a>
                    </h4>
                    <p>App</p>
                    <div>
                      <a
                        href="assets/img/portfolio/app1.jpg"
                        data-gallery="portfolioGallery"
                        title="App 1"
                        className="portfolio-lightbox link-preview"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/web3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Web 3</a>
                    </h4>
                    <p>Web</p>
                    <div>
                      <a
                        href="assets/img/portfolio/web3.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Web 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/app2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">App 2</a>
                    </h4>
                    <p>App</p>
                    <div>
                      <a
                        href="assets/img/portfolio/app2.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="App 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/card2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Card 2</a>
                    </h4>
                    <p>Card</p>
                    <div>
                      <a
                        href="assets/img/portfolio/card2.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Card 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/web2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Web 2</a>
                    </h4>
                    <p>Web</p>
                    <div>
                      <a
                        href="assets/img/portfolio/web2.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Web 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/app3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">App 3</a>
                    </h4>
                    <p>App</p>
                    <div>
                      <a
                        href="assets/img/portfolio/app3.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="App 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/card1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Card 1</a>
                    </h4>
                    <p>Card</p>
                    <div>
                      <a
                        href="assets/img/portfolio/card1.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Card 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/card3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Card 3</a>
                    </h4>
                    <p>Card</p>
                    <div>
                      <a
                        href="assets/img/portfolio/card3.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Card 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/web1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">Web 1</a>
                    </h4>
                    <p>Web</p>
                    <div>
                      <a
                        href="assets/img/portfolio/web1.jpg"
                        className="portfolio-lightbox link-preview"
                        data-gallery="portfolioGallery"
                        title="Web 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="link-details"
                        title="More Details"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-bg">
          <div className="container" data-aso="zoom-in">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="testimonials-slider swiper-container"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-1.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus at semper.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-2.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum quid cillum eram malis quorum
                          velit fore eram velit sunt aliqua noster fugiat irure
                          amet legam anim culpa.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-3.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-4.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla
                          culpa multos export minim fugiat minim velit minim
                          dolor enim duis veniam ipsum anim magna sunt elit fore
                          quem dolore labore illum veniam.
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img
                          src="assets/img/testimonial-5.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <p>
                          Quis quorum aliqua sint quem legam fore sunt eram
                          irure aliqua veniam tempor noster veniam enim culpa
                          labore duis sunt culpa nulla illum cillum fugiat legam
                          esse veniam culpa fore nisi cillum quid.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src="assets/img/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div className="member">
                  <img
                    src="assets/img/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <div className="member">
                  <img
                    src="assets/img/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3>Our CLients</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque dere santome nida.
              </p>
            </div>

            <div
              className="row g-0 clients-wrap clearfix"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h3>Contact Us</h3>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="map mb-4 mb-lg-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "340px" }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-5 info">
                    <i className="bi bi-geo-alt"></i>
                    <p>A108 Adam Street, NY 535022</p>
                  </div>
                  <div className="col-md-4 info">
                    <i className="bi bi-envelope"></i>
                    <p>info@example.com</p>
                  </div>
                  <div className="col-md-3 info">
                    <i className="bi bi-phone"></i>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div className="form">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 mt-3 mt-lg-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" title="Send Message">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 footer-info">
                <h3>NewBiz</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>

                <div class="social-links">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

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