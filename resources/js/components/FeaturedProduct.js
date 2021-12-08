import React from "react";

function FeaturedProduct() {
    return (
        <div className="mb-4 mt-2 border">
            <nav>
                <span className=" position-absolute m-2 ">
                    Featured Product
                </span>
                <div
                    class="nav nav-tabs justify-content-end"
                    id="nav-tab"
                    role="tablist"
                >
                    <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        Home
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        Profile
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                    >
                        Contact
                    </a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <div class="row p-4">
                        <div class="ml-auto">
                            <a
                                class="btn btn-primary mb-3 mr-1"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                            >
                                <span>previous</span>
                            </a>
                            <a
                                class="btn btn-primary mb-3 "
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                            >
                                <span>next</span>
                            </a>
                        </div>
                        <div class="col-12">
                            <div
                                id="carouselExampleIndicators2"
                                class="carousel slide"
                                data-ride="carousel"
                            >
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                >
                    <div class="row p-4">
                        <div class="ml-auto">
                            <a
                                class="btn btn-primary mb-3 mr-1"
                                href="#carouselExampleIndicators3"
                                role="button"
                                data-slide="prev"
                            >
                                <span>previous</span>
                            </a>
                            <a
                                class="btn btn-primary mb-3 "
                                href="#carouselExampleIndicators3"
                                role="button"
                                data-slide="next"
                            >
                                <span>next</span>
                            </a>
                        </div>
                        <div class="col-12">
                            <div
                                id="carouselExampleIndicators3"
                                class="carousel slide"
                                data-ride="carousel"
                            >
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                >
                    <div class="row p-4">
                        <div class="ml-auto">
                            <a
                                class="btn btn-primary mb-3 mr-1"
                                href="#carouselExampleIndicators4"
                                role="button"
                                data-slide="prev"
                            >
                                <span>previous</span>
                            </a>
                            <a
                                class="btn btn-primary mb-3 "
                                href="#carouselExampleIndicators4"
                                role="button"
                                data-slide="next"
                            >
                                <span>next</span>
                            </a>
                        </div>
                        <div class="col-12">
                            <div
                                id="carouselExampleIndicators4"
                                class="carousel slide"
                                data-ride="carousel"
                            >
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card">
                                                    <img
                                                        class="img-fluid"
                                                        alt="100%x280"
                                                        src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                                    />
                                                    <div class="card-body">
                                                        <h4 class="card-title">
                                                            Special title
                                                            treatment
                                                        </h4>
                                                        <p class="card-text">
                                                            With supporting text
                                                            below as a natural
                                                            lead-in to
                                                            additional content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;
