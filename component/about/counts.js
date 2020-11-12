import React from 'react'
import Head from "next/head";

const Counter = (props) => {

    return (
        <React.Fragment>
            <section id="counts" className="counts section-bg">
                <div className="container">

                    <div className="row counters">

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1232</span>
                            <p>Students</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">64</span>
                            <p>Courses</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">42</span>
                            <p>Events</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">15</span>
                            <p>Trainers</p>
                        </div>

                    </div>

                </div>
            </section>
s        </React.Fragment>
    )
}

export default Counter;
