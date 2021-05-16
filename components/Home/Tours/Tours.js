import React from 'react';
import Link from 'next/link';

const Tours = ({ tours }) => {

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center">
                        <h2 className="mb-4">See our latest vacation ideas</h2>
                    </div>
                </div>
                <div className="row">

                    {
                        tours?.map(tour => {
                            return (
                                <div key={tour.id} className="col-md-4">
                                    <Link href={`/tours/${tour?.id}`}>
                                        <a className="destination-entry img" style={{ backgroundImage: "url(" + 'http://127.0.0.1:8000/storage/images/tours/' + tour?.featured_img + ")" }}>
                                            <div className="text text-center">
                                                <h3>{tour?.name}</h3>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    );
};

export default Tours;