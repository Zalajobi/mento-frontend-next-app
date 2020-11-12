import React from 'react';

const PopularCourses = (props) => {
    return (
        <React.Fragment>
            <section id="popular-courses" className="courses">
                <div className="container">

                    <div className="section-title">
                        <h2>Courses</h2>
                        <p>Popular Courses</p>
                    </div>

                    <div className="row" data-aos-delay="100">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="course-item">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605152866/Mentor/Courses/course-1_mrebtn.jpg" className="img-fluid" alt="..."/>
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>

                                    <h3><a href="course-details.html">Website Design</a></h3>
                                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-1_iwrcjw.jpg" className="img-fluid" alt=""/>
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"/>&nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart"/>&nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="course-item">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605152868/Mentor/Courses/course-2_wmwdwu.jpg" className="img-fluid" alt="..."/>
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Marketing</h4>
                                        <p className="price">$250</p>
                                    </div>

                                    <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-2_ao2hec.jpg" className="img-fluid" alt=""/> <span>Lana</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                                            <i className="bx bx-heart"></i>&nbsp;42
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="course-item">
                                <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605152866/Mentor/Courses/course-3_pf2plc.jpg" className="img-fluid" alt="..."/>
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Content</h4>
                                        <p className="price">$180</p>
                                    </div>

                                    <h3><a href="course-details.html">Copywriting</a></h3>
                                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia mquae dolores dolorem tempore.</p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605153058/Mentor/Trainers/trainer-3_dwefjs.jpg" className="img-fluid"  alt=""/> <span>Brandon</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user"/>&nbsp;20 &nbsp;&nbsp;
                                            <i className="bx bx-heart"/>&nbsp;85
                                        </div>
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

export default PopularCourses;
