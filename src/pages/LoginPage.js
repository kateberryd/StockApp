
import React, { useEffect, useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';
import {Container, Spinner, Button, Alert} from 'react-bootstrap';
import './css/Login.css';
import { useForm } from 'react-hook-form';
import {useSelector, useDispatch } from 'react-redux';
import {   loginUser } from '../redux/login-comp';
import loginReducer from  '../redux/loginSlice';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const {loginPending, loginSuccess, loginFail} = loginReducer.actions;
    
    const {isLoading, isError, errorMessage} = useSelector((state) => state.user)
    

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
      });
    const dispatch = useDispatch();
    const { register, errors, handleSubmit } = useForm(

        {    resolver: yupResolver(validationSchema)
        }
    );

    const onSubmit = async (data) =>  {
       dispatch(loginPending());
      try{
        let isAuth = await dispatch(loginUser(data));  
        const result = isAuth.payload.data.data
        const {success} = isAuth.payload.data;
        if(success){
          console.log(result.user);
          sessionStorage.setItem('token', result.token)
          localStorage.setItem("token", result.token)
          dispatch(loginSuccess(result.user))
          navigate('/dashboard')
        }else{
          console.log(isAuth);
          dispatch(loginFail(isAuth.payload.data))
        }
        
      }catch(e){
        console.log(e)
        dispatch(loginFail(e)); 
      }
    };
    
   
  return (
    
   <Container>  
   
    
    <div className="login col-md-4">
    
    {isError ? <Alert variant="danger">
     <p>{errorMessage}</p>
     </Alert>: null }
    <div className="form">
    
    <Form onSubmit={handleSubmit(onSubmit)} className='login-form'>
      
      <Form.Group>
        <label>Email</label>
        <Form.Control
          name="email"
          type="text"
          {...register('email')}
        //   className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
      </Form.Group>
      <Form.Group class="mt-4">
        <label>Password</label>
        <Form.Control
          name="password"
          type="password"
          {...register('password')}
        //   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
      </Form.Group>
      
      
        <Button type="submit" className="btn btn-primary">                
                {isLoading ? <Spinner variant="white" animation="border" /> : 'Login'}
        </Button>
       

    </Form>
   </div>
  </div>
   </Container>
  );
}