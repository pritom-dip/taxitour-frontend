import React from 'react';
import Tour from '../../partials/Tour/Tour';

const Destinations = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Most Popular Destination</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">

                    <Tour />
                    <Tour />
                    <Tour />
                    <Tour />

                </div>
            </div>
        </section>
    );
};

export default Destinations;