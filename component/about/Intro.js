import React from 'react';

const About_Intro = (props) => {

    return (
        <React.Fragment>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>About Us</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos-delay="100">
                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605145484/Mentor/About/about_aq1x98.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </li>
                                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in
                                    voluptate velit.
                                </li>
                                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate
                            </p>
                            <a href="about" className="learn-more-btn">Learn More</a>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default About_Intro;
