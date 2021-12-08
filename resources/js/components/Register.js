
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
function Register() {
    const navigation = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("auth_token")){
            navigation("/");
        }
    })
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: []
    });

    const handleInput = (e) =>{
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmmit = (e) => {
        e.preventDefault();
         
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.post(`/api/register`, data).then(res => {
            if(res.data.status === 200){
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('username', res.data.username);
                swal("Success",res.data.message,"success");
                navigation('/');
            }else{
                setRegister({...registerInput, error_list: res.data.validation_errors});
              
            }
        })
    }

    return (
        <div className="container">
            <h1>Register Page</h1>
            <form onSubmit= {registerSubmmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        id=""
                        onChange={handleInput}
                        value={registerInput.name}
                        aria-describedby=""
                        placeholder="Enter name"
                    />
                    <span>{registerInput.error_list.name}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInput}
                        value={registerInput.email}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                        <span>{registerInput.error_list.email}</span>
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
                        value={registerInput.password}
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                        <span>{registerInput.error_list.password}</span>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;
