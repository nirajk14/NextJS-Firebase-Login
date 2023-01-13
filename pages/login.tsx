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
            <Form onSubmit = {handleLogin}>
                <Form.Group className='mb-3'
                controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    onChange={ (e:any) =>
                    setData({
                        ...data,
                        email: e.target.value,
                    })}
                    value={data.email}
                    required
                    type='email'
                    placeholder='Enter your Email address'/>
                </Form.Group>


                <Form.Group className='mb-3'
                controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    onChange={ (e:any) =>
                    setData({
                        ...data,
                        password: e.target.value,
                    })}
                    value={data.password}
                    required
                    type='password'
                    placeholder='Enter your password'/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </div>
    )
}



export default Login 