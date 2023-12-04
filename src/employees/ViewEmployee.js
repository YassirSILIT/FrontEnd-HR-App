import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEmployee() {

    const [user,setUser] = useState({
        firstName : "",
        lastName : "",
        mail : "",
        password : ""
    })

    const {id} = useParams();

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8087/employee/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h3 className='text-center m-4'>User Details</h3>
                    <div className='card'>
                        <div className='card-header'>
                            Details of User id : {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>FirstName: </b> 
                                    {user.firstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>LastName: </b>
                                    {user.lastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>E-mail: </b>
                                    {user.mail}
                                </li>
                                <li className='list-group-item'>
                                    <b>Password: </b>
                                    {user.password}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
