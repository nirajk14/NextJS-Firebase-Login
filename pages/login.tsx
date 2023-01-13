import React, { useState } from 'react'
import  {Button,Form } from 'react-bootstrap'

const Login =() => {
    const[data,setData]=useState({
        email: '',
        password: '',
    })

    const handleLogin = (e:any) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div style={
            {
                width: '40%',
                margin: 'auto',
            }
        }>

            <h1 className="text-center my-3">Login</h1>
        </div>
    )
}



export default Login 