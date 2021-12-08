import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import SubCategory from "./SubCategory";
import Subnavbar from "./Subnavbar";
import { useNavigate } from "react-router";
function Navbar() {
    const navigation = useNavigate();
    let isLoginPgae = false;
    if (window.location.href.split("/")[3] === "login") {
        isLoginPgae = true;
    } else {
        isLoginPgae = false;
    }

    const submitLogout = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then( res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('username');
                swal("Success", res.data.message, "success");
                navigation("/");
            }
        });
    }
    var authButtons = "";
    if (!localStorage.getItem("auth_token")) {
        authButtons = (
            <div className="flex flex-row">
                <div>
                    <NavLink
                        className="nav-link"
                        to={isLoginPgae ? "/register" : "/register"}
                        >
                        <i className="fas fa-lock mr-2"></i>
                        Register
                    </NavLink>
                </div>
                <div>
                    <NavLink className="nav-link" to="/login">
                        <i className="fas fa-lock mr-2"></i>
                        Login
                    </NavLink>
                </div>
            </div>
        );
    } else {
        authButtons = (
            <div className="flex flex-row">
                <div>
                    <button type="button" onClick={submitLogout} className="nav-link">
                        <i className="fas fa-lock mr-2"></i>
                        Logout
                    </button>
                </div>
            </div>
        );
    }
    
    
    return (
        <div>
            <nav
                class=" navbar-expand-lg navbar-light bg-white border"
                style={{ padding: "0 !important" }}
            >
                <div class="container-fluid  d-flex justify-content-around ">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div>
                        <ul class="navbar-nav">
                            <li class="nav-item border-right border-left">
                                <a
                                    class="nav-link "
                                    aria-current="page"
                                    href="#"
                                >
                                    English <i class="fas fa-flag-usa"></i>
                                </a>
                            </li>
                            <li class="nav-item border-right border-left">
                                <a class="nav-link" href="#">
                                    Nepali
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="navbar-nav d-flex">
                            <li class="nav-item border-right border-left">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-user-alt mr-2"></i>Account
                                </a>
                            </li>
                            <li class="nav-item border-right border-left">
                                <a class="nav-link" href="#">
                                    <i class="far fa-heart mr-2"></i>Whishlist
                                </a>
                            </li>
                            <li class="nav-item border-right border-left">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-share mr-2"></i>Checkout
                                </a>
                            </li>
                            <li class="nav-item border-right border-left">
                                {authButtons}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Subnavbar />
            <div className="d-flex container w-100">
                <SubCategory />
                <Content />
            </div>
            <Footer />
        </div>
    );
}
if (document.getElementById("app")) {
    ReactDOM.render(<Navbar />, document.getElementById("app"));
}
export default Navbar;
