import React from 'react';

const AllEvents = (props) => {
    return (
        <React.Fragment>
            <section id="events" className="events">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605164125/Mentor/Events/events-2_fgekfh.jpg" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="">Introduction to webdesign</a></h5>
                                    <p className="font-italic text-center">Sunday, September 26th at 7:00 pm</p>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605164125/Mentor/Events/events-2_fgekfh.jpg" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="">Marketing Strategies</a></h5>
                                    <p className="font-italic text-center">Sunday, November 15th at 7:00 pm</p>
                                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default AllEvents;
