import React from 'react'

function Subnavbar() {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-2">
                        <h1 className="font-weight-bold">
                            <span className="text-primary">E-</span>Com
                        </h1>
                    </div>
                    <div className="col-md-6 ">
                        <div
                            className="d-flex border p-2 "
                            style={{ height: "50px", borderRadius: "2.5rem" }}
                        >
                            <input
                                type="text"
                                placeholder="search"
                                className="ml-2"
                                style={{ width: "90%", outline: "none" }}
                            />
                            <i
                                class="fas fa-search fa-2x m-auto"
                                style={{ color: "#7a7ada" }}
                            ></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="d-flex ">
                            <div className="w-25">
                                <i
                                    class="fas fa-mobile fa-3x m-auto"
                                    style={{ color: "#7a7ada" }}
                                ></i>
                            </div>
                            <div>
                                <p>
                                    <span className="font-weight-bold">
                                        Call US
                                    </span>
                                    <br />
                                    9819149201
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="float-right">
                            <i
                                class="fas fa-shopping-bag fa-3x"
                                style={{ color: "#7a7ada" }}
                            ></i>
                        </p>
                    </div>
                </div>
                <div className="" style={{ height: "50px" }}>
                    <ul className="list-unstyled mt-4">
                        <li class="nav-item d-inline m-4">
                            Home <i class="fas fa-angle-down mr-2"></i>
                        </li>
                        <li class="nav-item d-inline m-4">
                            Page Menu <i class="fas fa-angle-down mr-2"></i>
                        </li>
                        <li class="nav-item d-inline m-4">
                            Pages <i class="fas fa-angle-down mr-2"></i>
                        </li>
                        <li class="nav-item d-inline m-4">
                            Blog <i class="fas fa-angle-down mr-2"></i>
                        </li>
                        <li class="nav-item d-inline m-4">
                            Contact <i class="fas fa-angle-down mr-2"></i>
                        </li>
                        <li className="nav-item float-right d-inline">
                            <div
                                className="border mr-4 p-2 border-success text-success font-weight-bold"
                                style={{
                                    height: "40px",
                                    borderRadius: "2.5rem",
                                }}
                            >
                                Track Your Order
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Subnavbar
