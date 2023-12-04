import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function EditEmployee() {

    let navigate= useNavigate();

    const [user,setUser]=useState({
        firstName : "",
        lastName : "",
        mail : "",
        password : ""
    });

    const {id}=useParams();

    const {firstName,lastName,mail,password}=user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});  
    };

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8087/employee/${id}`,user);
        setUser(result.data);
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8087/employee/${id}`,user);
        navigate("/");
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h3 className='text-center m-4'>Edit User</h3>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <labl htmlFor='firstName' className='form-label'>
                            FirstName
                        </labl>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your FirstName'
                            name='firstName'
                            value={firstName}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <labl htmlFor='lastName' className='form-label'>
                            LastName
                        </labl>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your LastName'
                            name='LastName'
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <labl htmlFor='mail' className='form-label'>
                            E-mail
                        </labl>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your E-mail address'
                            name='mail'
                            value={mail}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <labl htmlFor='password' className='form-label'>
                            Password
                        </labl>
                        <input
                            type={"password"}
                            className='form-control'
                            placeholder='Enter your Password'
                            name='password'
                            value={password}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mt-2'>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to="/">
                            Cancel
                        </Link>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
