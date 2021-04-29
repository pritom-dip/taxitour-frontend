import Layout from "../../components/Layout/Layout";

export default function Tours({ tours }) {

    return (
        <>
            <Layout>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 sidebar order-md-last ftco-animate">
                                <div class="sidebar-wrap ftco-animate">
                                    <h3 class="heading mb-4">Find City</h3>
                                    <form action="#">
                                        <div class="fields">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Destination, City" />
                                            </div>
                                            <div class="form-group">
                                                <div class="select-wrap one-third">
                                                    <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" class="form-control" placeholder="Keyword search">
                                                        <option value="">Select Location</option>
                                                        <option value="">San Francisco USA</option>
                                                        <option value="">Berlin Germany</option>
                                                        <option value="">Lodon United Kingdom</option>
                                                        <option value="">Paris Italy</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" id="checkin_date" class="form-control checkin_date" placeholder="Date from" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" id="checkout_date" class="form-control checkout_date" placeholder="Date to" />
                                            </div>
                                            <div class="form-group">
                                                <div class="range-slider">
                                                    <span>
                                                        <input type="number" value="25000" min="0" max="120000" /> -
                                                            <input type="number" value="50000" min="0" max="120000" />
                                                    </span>
                                                    <input value="1000" min="0" max="120000" step="500" type="range" />
                                                    <input value="50000" min="0" max="120000" step="500" type="range" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Search" class="btn btn-primary py-3 px-5" />
                                        </div>

                                    </form>
                                </div>
                                <div class="sidebar-wrap ftco-animate">
                                    <h3 class="heading mb-4">Star Rating</h3>
                                    <form method="post" class="star-rating">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" htmlFor="exampleCheck1">
                                                <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i
                                                    class="icon-star"></i><i class="icon-star"></i></span></p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">
                                                <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i
                                                    class="icon-star"></i><i class="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">
                                                <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i
                                                    class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">
                                                <p class="rate"><span><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star-o"></i><i
                                                    class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">
                                                <p class="rate"><span><i class="icon-star"></i><i class="icon-star-o"></i><i
                                                    class="icon-star-o"></i><i class="icon-star-o"></i><i class="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="row">

                                    {
                                        tours?.map(tour => {
                                            return (
                                                <div class="col-sm col-md-6 col-lg-4 ftco-animate">
                                                    <div class="destination">
                                                        <a href="#" class="img img-2 d-flex justify-content-center align-items-center"
                                                            attr="background-image: url(images/hotel-1.jpg);" style={{ backgroundImage: "url(" + process.env.IMG_URL + '/' + tour?.featured_img + ")" }}>
                                                            <div class="icon d-flex justify-content-center align-items-center">
                                                                <span class="icon-link"></span>
                                                            </div>
                                                        </a>
                                                        <div class="text p-3">
                                                            <div class="d-flex">
                                                                <div class="one">
                                                                    <h3><a href="#">{tour?.name}</a></h3>
                                                                    <p class="rate">
                                                                        <i class="icon-star"></i>
                                                                        <i class="icon-star"></i>
                                                                        <i class="icon-star"></i>
                                                                        <i class="icon-star"></i>
                                                                        <i class="icon-star-o"></i>
                                                                        <span>8 Rating</span>
                                                                    </p>
                                                                </div>
                                                                <div class="two">
                                                                    <span class="price per-price">${tour?.price}<br /><small>/night</small></span>
                                                                </div>
                                                            </div>
                                                            <p>{tour?.short_desc}</p>
                                                            <hr />
                                                            <p class="bottom-area d-flex">
                                                                <span><i class="icon-map-o"></i> {tour?.location?.name}</span>
                                                                <span class="ml-auto"><a href="#">Book Now</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }



                                </div>
                                <div class="row mt-5">
                                    <div class="col text-center">
                                        <div class="block-27">
                                            <ul>
                                                <li><a href="#">&lt;</a></li>
                                                <li class="active"><span>1</span></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">&gt;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

Tours.getInitialProps = async () => {
    const url = process.env.SITE_URL;
    try {
        const res = await fetch(`${process.env.SITE_URL}/api/tours`);
        const tours = await res.json();
        return {
            tours
        }
    } catch {
        return {
            tours: []
        }
    }
}