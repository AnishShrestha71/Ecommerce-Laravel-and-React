import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'applcation/json';
axios.defaults.headers.post['Accept'] = 'applcation/json';
axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})
function Example() {
   
    return (
        <div className="bg-white">
            <Router>
                <Routes>
                    <Route path="/" element={<Navbar />} exact></Route>
                    {/* <Route path="/register" element={<Register />} exact></Route>
                    <Route path="/login" element={<Login />} exact></Route> */}
                   <Route path="/login" element={<Login/> }>
                       
                   </Route>
                   <Route path="/register" element={ <Register/> }>
                      
                   </Route>
                   <Route path="/admin/dashboard" element={<Admin />} exact></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(
        <div>
            <Example />
        </div>,
        document.getElementById("example")
    );
}
