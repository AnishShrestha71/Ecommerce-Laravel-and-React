//rfce
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { useState,useEffect } from "react";
function Login() {
    
    const navigation = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("auth_token")){
            navigation("/");
        }
    })
    const [loginInput, setlogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();

        setlogin({ ...loginInput, [e.target.name]: e.target.value });
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.post(`/api/login`, data).then((res) => {
            if (res.data.status === 200) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("username", res.data.username);
                swal("Success", res.data.message, "success");
                navigation("/");
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            } else {
                setlogin({
                    ...loginInput,
                    error_list: res.data.validation_errors,
                });
            }
        });
    };

    return (
        <div className="container">
            <h1>Login Page</h1>
            <form onSubmit={loginSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInput}
                        value={loginInput.email}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <span>{loginInput.error_list.email}</span>
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInput}
                        value={loginInput.password}
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                    <span>{loginInput.error_list.password}</span>
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
