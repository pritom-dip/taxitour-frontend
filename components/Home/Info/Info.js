import React from 'react';
import TaxiBooking from '../TaxiBooking/TaxiBooking';
import styles from './info.module.css';

const Info = () => {
    return (
        <section className="ftco-about mb-5">
            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-md-7">
                        <div className={`${styles.bookingWrapperSection} fullContentWrapper`}>
                            <ul className={`nav nav-pills ${styles.taxi_booking_title_wrapper}`}>
                                <li className="">
                                    <a href="#1a" data-toggle="tab" className="active show">Airport Pick Up</a>
                                </li>
                                <li><a href="#2a" data-toggle="tab">Airport Drop Off</a>
                                </li>
                            </ul>

                            <TaxiBooking />

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="heading-section">
                            <h2 className="mb-4">The Best Travel Agency</h2>
                        </div>
                        <div>
                            <p>
                                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would
                                have been rewritten a thousand times and everything that was left from its origin would be the word
                                "and" and the
                                Little Blind Text should turn around and return to its own, safe country. But nothing the copy said
                                could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made
                                her drunk with
                                Longe and Parole and dragged her into their agency, where they abused her for their.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Info;