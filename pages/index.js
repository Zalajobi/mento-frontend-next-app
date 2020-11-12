import Header from "../component/Header";
import React from "react";
import { Helmet } from 'react-helmet'
import About_Intro from "../component/about/Intro";
import Counter from "../component/about/counts";
import WhyMentor from "../component/about/WhyMentor";
import Features from "../component/about/Features";
import PopularCourses from "../component/courses/Popular";
import TopTrainers from "../component/trainers/TopTrainers";
import Footer from "../component/footer";
import Head from "next/head";

const Home = (props) => {

  return (

      <div className="d-flex flex-column">

          {/*<Helmet>*/}
          {/*    <script src="../public/static/js/aos.js" type="text/javascript"/>*/}
          {/*</Helmet>*/}

        <Header/>

          {/* <!-- ======= Hero Section ======= -->*/}
          <section>
              <div id="hero" className="d-flex flex-row align-items-center justify-content-center">
                  <div className="container position-relative"  data-aos-delay="100">
                      <h1>Learning Today, <br/>Leading Tomorrow</h1>
                      <h2>we offer state of the art courses at affordable price</h2>
                      <a href="courses" className="btn-get-started">Get Started</a>
                  </div>
              </div>
          </section>
          {/* <!-- End Hero -->*/}

          <main id="main">

              {/*About start*/}
              <About_Intro/>

              <Counter/>

              <WhyMentor/>

              <Features/>
              {/*About End*/}

              {/*Courses Start*/}
              <PopularCourses/>
              {/*Courses End*/}

              {/*Trainers Start*/}
              <TopTrainers/>
          </main>

          <Footer/>


          <Head>
              <title>Mento - Buy Courses</title>
          </Head>
      </div>
  )
}


export default Home;
