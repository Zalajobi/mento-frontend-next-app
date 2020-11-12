import React from "react";
import Header from "../../component/Header";
import PricingList from "../../component/pricing/Pricing";
import Footer from "../../component/footer";

const Pricing = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Pricing</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <PricingList/>
            </main>

            <Footer/>
        </div>
    )
}


export default Pricing;
