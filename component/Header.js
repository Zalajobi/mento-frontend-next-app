import React from 'react';
import { appendScript } from '../util/appendScript'
import Head from "next/head";

const Header = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>Mento - Buy Courses</title>
                {/*<script type="text/javascript" src="../public/static/js/counterup.min.js"/>*/}
                {/*<script type="text/javascript" src="../styles/aos/aos.js"/>*/}
            </Head>
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
        </React.Fragment>
    )
}

export default Header;
