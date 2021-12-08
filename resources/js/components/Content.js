import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import NewProduct from "./NewProduct";

function Content() {
    return (
        <div className="container">
            <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-ride="carousel"
            >
                <div class="carousel-inner ">
                    <div class="carousel-item active" data-interval="10000">
                        <img
                            src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?s=612x612"
                            class="d-block img-fluid w-100"
                            style={{ height: "500px" }}
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>lsdafasdfsd asbasbsb</h5>
                            <p>lsdafasdfsd asbasbsb</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img
                            src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?s=612x612"
                            class="d-block img-fluid w-100"
                            style={{ height: "500px" }}
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>lsdafasdfsd asbasbsb</h5>
                            <p>lsdafasdfsd asbasbsb</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://media.istockphoto.com/photos/young-beautiful-woman-picture-id1294339577?s=612x612"
                            class="d-block img-fluid w-100"
                            style={{ height: "500px" }}
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>lsdafasdfsd asbasbsb</h5>
                            <p>lsdafasdfsd asbasbsb</p>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="d-flex mt-2">
                <div className="mr-2">
                    <img
                        className="img-fluid"
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433"
                        alt="laptop"
                    />
                </div>
                <div className="mr-2">
                    <img
                        className="img-fluid "
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433"
                        alt="laptop"
                    />
                </div>
                <div>
                    <img
                        className="img-fluid"
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433"
                        alt="laptop"
                    />
                </div>
            </div>
            <FeaturedProduct />
            <div className="d-flex " style={{height: '150px'}}>
                <div className="w-50 mr-2">
                    <img
                        className="img-fluid w-100 "
                        src="https://i.pcmag.com/imagery/reviews/06IqvjpwXgLJ8XUJeTgaQ6u-41.1574731211.fit_lim.size_298x174.jpg"
                        className="img-fluid "
                        style={{
                            width: "-webkit-fill-available",
                            height: "-webkit-fill-available",
                        }}
                    />
                </div>
                <div className="w-50">
                    <img
                        className="img-fluid "
                        style={{
                            width: "-webkit-fill-available",
                            height: "-webkit-fill-available",
                        }}
                        src="https://rukminim1.flixcart.com/image/880/1056/kbmjssw0/backpack/d/s/z/ladies-bag-1200234-backpack-jordan-cool-12-original-imafswvaqbuacyk8.jpeg?q=50"
                    />
                </div>
            </div>
            <NewProduct />
        </div>
    );
}

export default Content;
