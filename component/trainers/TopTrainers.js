import React from 'react'

const TopTrainers = (props) => {

    return (
        <React.Fragment>
            <section id="trainers" className="trainers">
                <div className="container">

                    <div className="section-title">
                        <h2>Trainers</h2>
                        <p>Our Professional Trainers</p>
                    </div>

                    <div className="row" data-aos-delay="100">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-1_iwrcjw.jpg" className="img-fluid" alt=""/>
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis
                                            perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-2_ao2hec.jpg" className="img-fluid" alt=""/>
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In
                                            architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-3_dwefjs.jpg" className="img-fluid" alt=""/>
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro
                                            et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default TopTrainers;
