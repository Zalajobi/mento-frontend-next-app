import React from "react";
import Header from "../../component/Header";
import Head from "next/head";
import Footer from "../../component/footer";
import PopularCourses from "../../component/courses/Popular";

const Courses = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Courses</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <PopularCourses/>
            </main>

            <Footer/>

            <Head>
                <title>Mento - Courses</title>
            </Head>
        </div>
    )
}


export default Courses;
