
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { RiUser6Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton';
import { authReset, registerUser, } from '../features/auth/authSlice';
import { AiFillExclamationCircle } from "react-icons/ai";
import Loading from '../components/Loading';


function Signup() {
  const {register,handleSubmit,} = useForm()
  const {user,isError,isLoading,isSuccess,error} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  async function onSubmit(data) {
    
    
    dispatch(registerUser(data))

  }

    useEffect(() => {
      dispatch(authReset())
      
    },[dispatch])

  useEffect(() => {
    // dispatch(authReset())
    
    if(isError) {
      setErrorMessage(error)
    }

    if(!isError) {
      setErrorMessage('')
    }

    if(isSuccess){
      navigate('/')
    }
  }, 
  [isError,isSuccess,error,user,navigate,dispatch])

  

  if(isLoading) {
    return (
      <Loading />
    )
  }

    return (
      <div className=" flex justify-center items-center mx-auto h-screen px-5">
        <div className=" shadow-2xl md:w-7/12 lg:w-4/12 bg-slate-100 ">
          <div className="flex items-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-t-lg">
            <i className="text-3xl text-white font-bold mr-4">
              <RiUser6Fill />
            </i>
            <h1 className="text-3xl text-white font-bold">Sign Up</h1>
          </div>
          <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage ? 
              <p className="flex items-center mb-4 text-lg text-pink-600 font-bold tracking-wide">
              <i className="text-3xl text-pink-600 font-bold mr-4">
              <AiFillExclamationCircle /> 
              </i>
              {errorMessage}
            </p>
    
            : ''
            }
            <label htmlFor="username" className="text-xl text-slate-500 font-bold">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                id="username"
                className="
                    block outline-none text-lg font-bold text-slate-700
                    bg-slate-200 w-full rounded-lg p-2 mt-4 mb-6
                    "
              />
            <label htmlFor="email" className="text-xl text-slate-500 font-bold">
              email
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              className="
                  block outline-none text-lg font-bold text-slate-700
                  bg-slate-200 w-full rounded-lg p-2 mt-4
                  "
            />
            {/* <p className="text-pink-600">{errors ? errors?.email?.message : ''}</p> */}
            <label
              htmlFor="password"
              className="text-xl text-slate-500 font-bold mt-6 inline-block"
            >
              password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="
                  block outline-none text-lg font-bold text-slate-700
                   bg-slate-200 w-full rounded-lg p-2 mt-4
                  "
  
            />
            {/* <p  className="text-pink-600">{errors ? errors?.password?.message : ''}</p> */}
            <div className="mt-8  flex items-center justify-end">
              <p className="text-stone-400 text-sm mr-4">
                <Link to='/login'>Login </Link>
              </p>
              <CustomButton text="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    );
            }

export default Signup