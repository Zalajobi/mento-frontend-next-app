import React from "react";
import Header from "../../component/Header";
import AllEvents from "../../component/events/AllEvents";
import Footer from "../../component/footer";

const Events = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Events</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia
                            voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum
                            praesentium. </p>
                    </div>
                </div>

                <AllEvents/>
            </main>

            <Footer/>
        </div>
    )
}


export default Events;
