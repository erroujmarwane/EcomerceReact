import React, { useState } from 'react'
import toastr from 'toastr';
import logo from '../assets/images/logo.png'
import "toastr/build/toastr.css";

import { API_URL } from './../config'


const Signup = (props) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleChange = e => {

        setUser({...user, [e.target.id]: e.target.value})

    }

    
    const submitSignup = e => {

        e.preventDefault();

        fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                toastr.warning(res.error, 'Please Check form !', {
                    positionClass: "toast-bottom-left",
                })
            }
            else {
                toastr.success('User is created SuccessFully', 'New Accout', {
                    positionClass: "toast-bottom-left",
                })

                props.history.push('/signin')
            }

            

        })
        .catch(err =>  toastr.error(err, 'Server error !', {
                    positionClass: "toast-bottom-left",
                }))
    }

    const form = () => (
        <form onSubmit={submitSignup}> 
            <div className="form-group">
                <label htmlFor="name" className="text-muted">Name</label>
                <input onChange={handleChange} type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" />
            </div>


            <div className="form-group">
                <label htmlFor="password" className="text-muted">Password</label>
                <input onChange={handleChange} type="password" className="form-control" id="password"/>
            </div>

            <button className="btn btn-lg btn-block btn-raised btn-danger mt-4">Sign Up</button>

        </form>
    )

    return (
        <div className='container'>
        <p className='my-5 text-white'>sdf</p>
         
        <div className="row">
            <div className="col-md-6 mx-auto">
            <div className='mx-auto my-5 col-3'>
            <img className='mx-auto ' src={logo} height="120px" alt='logo'/>
            </div>
                { form() } 
            </div>
        </div> 

        
    </div>
    )
}

export default Signup
