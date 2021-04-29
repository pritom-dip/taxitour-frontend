import React from 'react';
import SingleFeedback from './SingleFeedback';

const Feedbacks = () => {
    return (
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <h2 className="mb-4">Our satisfied customer says</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in</p>
                    </div>
                </div>
                <div className="row ftco-animate">
                    <SingleFeedback />
                    <SingleFeedback />
                    <SingleFeedback />
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;