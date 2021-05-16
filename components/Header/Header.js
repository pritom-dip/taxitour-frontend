import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Taxi-tour</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"><span
                            className="oi oi-menu"></span> Menu</button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/tours">
                                    <a className="nav-link">Tours</a>
                                </Link>
                            </li>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="places.html" className="nav-link">Places</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('../../bg_1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
                        data-scrollax-parent="true">
                        <div className="col-md-9 mb-5 pb-5 text-center text-md-left"
                            data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                Discover <br />A new Place
                            </h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat,
                            shop, or visit from local experts</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;