import React from 'react';

const Services = () => {
    return (
        <section className="ftco-section services-section bg-light">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block">
                            <div className="icon"><span className="flaticon-yatch"></span></div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Special Activities</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block">
                            <div className="icon"><span className="flaticon-around"></span></div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Travel Arrangements</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block">
                            <div className="icon"><span className="flaticon-compass"></span></div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Private Guide</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch">
                        <div className="media block-6 services d-block">
                            <div className="icon"><span className="flaticon-map-of-roads"></span></div>
                            <div className="media-body">
                                <h3 className="heading mb-3">Location Manager</h3>
                                <p>A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;