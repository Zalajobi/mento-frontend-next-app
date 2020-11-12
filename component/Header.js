import React from 'react';
import Head from "next/head";

const Header = (props) => {
    return (
        <React.Fragment>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><a href="/">Mentor</a></h1>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            {/*<li className="active"><a href="/">Home</a></li>*/}
                            <li><a href="/">Home</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="courses">Courses</a></li>
                            <li><a href="trainers">Trainers</a></li>
                            <li><a href="events">Events</a></li>
                            <li><a href="pricing">Pricing</a></li>
                            <li><a href="contact">Contact</a></li>

                        </ul>
                    </nav>

                    <a href="courses" className="get-started-btn">Get Started</a>
                </div>
            </header>

            <Head>
                <script type="text/javascript" src="static/js/aos.js"/>
                <script type="text/javascript" src="/static/js/counterup.min.js"/>
                <script type="text/javascript" src="/static/js/jquery.easing.min.js"/>
                <script type="text/javascript" src="/static/js/jquery.min.js"/>
                <script type="text/javascript" src="/static/js/jquery.waypoints.min.js"/>
                <script type="text/javascript" src="/static/js/owl.carousel.js"/>
                <script type="text/javascript" src="/static/js/owl.carousel.min.js"/>
                <script type="text/javascript" src="/static/js/validate.js"/>
            </Head>
        </React.Fragment>
    )
}

export default Header;
