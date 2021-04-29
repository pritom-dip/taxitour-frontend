import React from 'react';

const SingleFeedback = () => {
    return (
        <div className="col-md-4">
            <div className="carousel-testmony owl-carousel ftco-owl">
                <div className="item">
                    <div className="testimony-wrap p-4 pb-5">
                        <div className="user-img mb-5" style={{ backgroundImage: "url(../../../images/person_1.jpg)" }}>
                            <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left"></i>
                            </span>
                        </div>
                        <div className="text">
                            <p className="mb-5">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                            <p className="name">Mark Web</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleFeedback;