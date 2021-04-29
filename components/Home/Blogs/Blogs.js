import React from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    return (
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h2><strong>Tips</strong> &amp; Articles</h2>
                    </div>
                </div>
                <div className="row d-flex">
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                </div>
            </div>
        </section>
    );
};

export default Blogs;