import React from 'react';

const SingleBlog = () => {
    return (
        <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20"
                    style={{ backgroundImage: "url(../../../images/image_1.jpg)" }}> </a>
                <div className="text">
                    <span className="tag">Tips, Travel</span>
                    <h3 className="heading mt-3"><a href="#">8 Best homestay in Philippines that you don't miss
                                    out</a></h3>
                    <div className="meta mb-3">
                        <div><a href="#">October 3, 2018</a></div>
                        <div><a href="#">Admin</a></div>
                        <div>
                            <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;