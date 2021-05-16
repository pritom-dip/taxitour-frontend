import Layout from "../../components/Layout/Layout";

export default function Tours({ tours }) {

    return (
        <>
            <Layout>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 sidebar order-md-last ">
                                <div className="sidebar-wrap ">
                                    <h3 className="heading mb-4">Find City</h3>
                                    <form action="#">
                                        <div className="fields">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Destination, City" />
                                            </div>
                                            <div className="form-group">
                                                <div className="select-wrap one-third">
                                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                    <select name="" id="" className="form-control" placeholder="Keyword search">
                                                        <option value="">Select Location</option>
                                                        <option value="">San Francisco USA</option>
                                                        <option value="">Berlin Germany</option>
                                                        <option value="">Lodon United Kingdom</option>
                                                        <option value="">Paris Italy</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="checkin_date" className="form-control checkin_date" placeholder="Date from" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="checkout_date" className="form-control checkout_date" placeholder="Date to" />
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="range-slider">
                                                    <span>
                                                        <input type="number" value="25000" min="0" max="120000" /> -
                                                            <input type="number" value="50000" min="0" max="120000" />
                                                    </span>
                                                    <input value="1000" min="0" max="120000" step="500" type="range" />
                                                    <input value="50000" min="0" max="120000" step="500" type="range" />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Search" className="btn btn-primary py-3 px-5" />
                                        </div>

                                    </form>
                                </div>
                                <div className="sidebar-wrap">
                                    <h3 className="heading mb-4">Star Rating</h3>
                                    <form method="post" className="star-rating">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i
                                                    className="icon-star"></i><i className="icon-star"></i></span></p>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i
                                                    className="icon-star"></i><i className="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i
                                                    className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i
                                                    className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i
                                                    className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">

                                    {

                                        tours?.map(tour => {
                                            return (
                                                <div key={tour?.id} className="col-sm col-md-6 col-lg-4 ">
                                                    <div className="destination">
                                                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center"
                                                            attr="background-image: url(images/hotel-1.jpg);" style={{ backgroundImage: "url(" + 'http://127.0.0.1:8000/storage/images/tours' + '/' + tour?.featured_img + ")" }}>
                                                            <div className="icon d-flex justify-content-center align-items-center">
                                                                <span className="icon-link"></span>
                                                            </div>
                                                        </a>
                                                        <div className="text p-3">
                                                            <div className="d-flex">
                                                                <div className="one">
                                                                    <h3><a href="#">{tour?.name}</a></h3>
                                                                    <p className="rate">
                                                                        <i className="icon-star"></i>
                                                                        <i className="icon-star"></i>
                                                                        <i className="icon-star"></i>
                                                                        <i className="icon-star"></i>
                                                                        <i className="icon-star-o"></i>
                                                                        <span>8 Rating</span>
                                                                    </p>
                                                                </div>
                                                                <div className="two">
                                                                    <span className="price per-price">${tour?.price}<br /><small>/night</small></span>
                                                                </div>
                                                            </div>
                                                            <p>{tour?.short_desc}</p>
                                                            <hr />
                                                            <p className="bottom-area d-flex">
                                                                <span><i className="icon-map-o"></i> {tour?.location?.name}</span>
                                                                <span className="ml-auto"><a href="#">Book Now</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="row mt-5">
                                    <div className="col text-center">
                                        <div className="block-27">
                                            <ul>
                                                <li><a href="#">&lt;</a></li>
                                                <li className="active"><span>1</span></li>
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
    const url = 'http://127.0.0.1:8000';
    try {
        const res = await fetch(`${url}/api/tours`);
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