import React from "react";
import Header from "../../component/Header";
import AllTrainers from "../../component/trainers/AllTrainers";
import Footer from "../../component/footer";

const Trainers = (props) => {
    return (
        <div>
            <Header/>

            <main id="main">

                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Trainers</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia
                            voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum
                            praesentium. </p>
                    </div>
                </div>

                <AllTrainers/>
            </main>

            <Footer/>
        </div>
    )
}


export default Trainers;
