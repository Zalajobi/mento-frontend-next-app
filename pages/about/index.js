import React from "react";
import Header from "../../component/Header";
import Head from "next/head";
import About_Intro from "../../component/about/Intro";
import Counter from "../../component/about/counts";
import Testimonials from "../../component/about/Testimonials";
import Footer from "../../component/footer";

const About = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>About Us</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <About_Intro/>

                <Counter/>

                <Testimonials/>
            </main>

            <Footer/>


            <Head>
                <title>Mento - About Us</title>
            </Head>
        </div>
    )
}


export default About;
