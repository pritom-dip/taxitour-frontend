import React from 'react';
import Layout from '../../components/Layout/Layout';

const index = () => {
    return (
        <Layout>
            <section class="ftco-section contact-section ftco-degree-bg">
                <div class="container">
                    <div class="row d-flex mb-5 contact-info">
                        <div class="col-md-12 mb-4">
                            <h2 class="h4">Contact Information</h2>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-md-3">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Email:</span> <span>toiree@gmail.com</span></p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                    <div class="row block-9">
                        <div class="col-md-6 order-md-last pr-md-5">
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1620116413772!5m2!1sen!2sbd" width="540" height="450" frameborder="0" style={{ border: '0px' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ftco-section-parallax">
                <div class="parallax-img d-flex align-items-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-7 text-center heading-section heading-section-white">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                    blind texts. Separated they live in</p>
                                <div class="row d-flex justify-content-center mt-5">
                                    <div class="col-md-8">
                                        <form action="#" class="subscribe-form">
                                            <div class="form-group d-flex">
                                                <input type="text" class="form-control" placeholder="Enter email address" />
                                                <input type="submit" value="Subscribe" class="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default index;