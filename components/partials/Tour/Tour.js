import React from 'react';

const Tour = () => {
    return (
        <div className="col-sm-12 col-md-3 col-lg-3 ftco-animate">
            <div className="destination">
                <a href="#" className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(../../../images/destination-1.jpg)" }}>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-link"></span>
                    </div>
                </a>
                <div className="text p-3">
                    <div className="d-flex">
                        <div className="one">
                            <h3><a href="#">Paris, Italy</a></h3>
                            <p className="rate">
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star-o"></i>
                                <span>8 Rating</span>
                            </p>
                        </div>
                        <div className="two">
                            <span className="price">$200</span>
                        </div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                    <p className="days"><span>2 days 3 nights</span></p>
                    <hr />
                    <p className="bottom-area d-flex">
                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                        <span className="ml-auto"><a href="#">Discover</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tour;