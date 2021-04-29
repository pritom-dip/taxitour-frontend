import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SiteHead from '../partials/Head/Head';

const Layout = ({ children, title = "TaxiTour" }) => {
    return (
        <>
            <SiteHead title={title} />
            <Header />
            {children}
            <Footer />

            <script src="/js/jquery.min.js"></script>
            <script src="/js/jquery-migrate-3.0.1.min.js"></script>
            <script src="/js/popper.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/jquery.easing.1.3.js"></script>
            <script src="/js/jquery.waypoints.min.js"></script>
            <script src="/js/owl.carousel.min.js"></script>
            <script src="/js/aos.js"></script>
            <script src="/js/jquery.animateNumber.min.js"></script>
            <script src="/js/scrollax.min.js"></script>
            <script src="/js/main.js"></script>

        </>
    );
};

export default Layout;