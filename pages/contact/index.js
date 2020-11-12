import React from "react";
import Header from "../../component/Header";
import ContactUs from "../../component/contact/ContactUs";
import Footer from "../../component/footer";

const Contact = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <ContactUs/>
            </main>

            <Footer/>
        </div>
    )
}


export default Contact;
